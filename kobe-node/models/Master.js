const sequelize = require('./db');
const { DataTypes } = require('sequelize')

module.exports = sequelize.define('Master',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    birthday:{
        type:DataTypes.DATE,
        allowNull:false
    },
    height:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    weight:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    country:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    team:{
        type:DataTypes.STRING,
        allowNull:false
    },
    postition:{
        allowNull:false,
        type:DataTypes.STRING,
    },
    birthplace:{
        allowNull:false,
        type:DataTypes.STRING,
    },
    hightSchool:{
        type:DataTypes.STRING,
        allowNull:false
    },
    house:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    nickname:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    }

})