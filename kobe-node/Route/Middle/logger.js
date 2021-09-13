const logger = require('../../logger/index');
module.exports = (req,res,next)=>{
    logger.debug(`${req.method} ${req.path}`)
    next();
}