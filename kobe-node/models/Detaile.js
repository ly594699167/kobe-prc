const sequelize = require('./db');
const { DataTypes } = require('sequelize')
 module.exports =  sequelize.define('Detaile',{
    title:{
        type:DataTypes.STRING,
        allowNull:true
    },
    time:{
        type:DataTypes.STRING(255),
        allowNull:true,
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    image:{
        type:DataTypes.STRING,
        allowNull:true
    },
    NavId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})