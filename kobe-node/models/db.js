const  {Sequelize } = require('sequelize');
const sequelize = new Sequelize('Kobe','root','yj594699167',{
    host:'localhost',
    dialect:'mysql',
    logging:false,
})

module.exports = sequelize;