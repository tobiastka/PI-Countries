const axios = require('axios');
const { Router } = require('express');
const { Country, TouristActivity } = require("../db/db.js");
const { validateQueryName } = require("../db/dbFunctions.js");
const router = Router();

router.get("/countries", async (req, res) => {
    try {
        const { name } = req.query;
        if (name) {

            const validName = validateQueryName(name);
            const specificCountryDB = await Country.findAll({
                where: {
                    name: validName
                }
            })
            res.json(specificCountryDB);
        } else {
            const allCountriesDB = await Country.findAll();
            res.json(allCountriesDB);
        }

    } catch (error) {
        res.status(404).json(error);
    }
})

router.get("/countries/:id", (req, res) => {
    try {
        res.json("/c/id");
    } catch (error) {
        res.status(404).json(error);
    }
})

router.post("/activities", async (req, res) => {
    try {
        
        const { name, difficulty, duration, season, countries } = req.body;

        const [activity, isNewActivity] = await TouristActivity.findOrCreate({
            where: {
                name, difficulty, duration, season
            },
            default: {
                name, difficulty, duration, season
            }
        });

        const countriesIDs = await Promise.all(countries.map((country) => {
            return Country.findAll({
                attributes: ['id'],
                where: {
                    name: country
                }
            });
        }))

        countriesIDs.forEach(async (countryID) => {
            await activity.addCountry(countryID[0].dataValues.id);
        })

        res.json({ activity, isNewActivity });

    } catch (error) {
        res.status(404).json(error);
    }
})



router.get("*", (req, res) => {
    res.json("ERROR 404 NOT FOUND");
})



module.exports = router;
