const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("touristActivity", {
        name: {
            type: DataTypes.STRING
        },
        difficulty: {
            type: DataTypes.ENUM({
                values: ['child', 'adult']
            })
            ,
        },
        duration: {
            type: DataTypes.STRING
        },
        season: {
            type: DataTypes.ENUM({
                values: ['spring', 'summer','fall','winter']
            })
        }
    })
}