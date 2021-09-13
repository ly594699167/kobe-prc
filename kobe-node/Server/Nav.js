const Nav = require('../models/Nav')
//导航请求
exports.getNav =async function(){
    const result = await Nav.findAll();
    if(result){
        return result;
    }
}