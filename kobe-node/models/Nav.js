const {DataTypes} = require('sequelize')
const sequelize = require('./db');

//定义一个导航模型
module.exports =sequelize.define('Nav',{
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    }},
   )