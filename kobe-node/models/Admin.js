//用于用户登录的模型
const sequelize = require('./db');
const { DataTypes } = require('sequelize')

module.exports = sequelize.define('Admin', {
    loginId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        paranoid: true,
        deletedAt:true
    }
)