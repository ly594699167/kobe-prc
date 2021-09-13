
require('./Image')
require('./Master')
require('./Detaile')
require('./Nav')
require('./Admin')
const sequelize = require('./db');
sequelize.sync({
    alert:true
}).then()