const sequelize = require('./db');
const {DataTypes} = require('sequelize')

 module.exports = sequelize.define('Image',{
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    data:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    NavId:{
        type:DataTypes.STRING,
        allowNull:false
    }
})