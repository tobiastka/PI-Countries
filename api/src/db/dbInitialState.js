const axios = require("axios");
const {Country} = require("../db/db.js");
module.exports = async () => {
    try {
        const apiResponse = await axios.get("https://restcountries.com/v3/all");
        const allCountries = apiResponse.data;
        allCountries.forEach(async country => {
            const newCountry = await Country.create({
                name: country.name.common,                                     //DB -> STRING CHECK
                image: country.flags[0],                                       //DB -> STRING CHECK
                continent: country.continents[0],                              //DB -> STRING CHECK
                capital: country.capital ? country.capital[0] : "NOT_CAPITAL", //DB -> STRING CHECK
                subregion: country.subregion,                                  //DB -> STRING CHECK
                area: Number(country.area),                                    //DB -> FLOAT  CHECK
                population: Number(country.population)                         //DB -> NUMBER CHECK 
            });
            
            // console.log(newCountry.toJSON());
        });
        console.log("DATA BASE UPDATE");
    } catch (error) {
        console.log(error);
    }
}