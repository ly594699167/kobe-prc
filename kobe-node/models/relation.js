const Navs = require('./Nav');
const Detailes = require('./Detaile');
const Image = require('./Image');


// Nav.hasMany(Image);
// Image.belongsTo(Nav);

Navs.hasMany(Detailes);
Detailes.belongsTo(Navs)
