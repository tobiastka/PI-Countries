const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("touristActivity", {
        name: {
            type: DataTypes.STRING
        },
        difficulty: {
            type: DataTypes.ENUM({
                values: ['Child', 'Adult']
            })
            ,
        },
        duration: {
            type: DataTypes.STRING
        },
        season: {
            type: DataTypes.ENUM({
                values: ['Ppring', 'Summer','Fall','Winter']
            })
        }
    })
}