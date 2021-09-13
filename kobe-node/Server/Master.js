//导出科比信息
const Master = require('../models/Master')
exports.getInfo = async function(){
    const result = await Master.findAll();
    if(result){
        return JSON.parse(JSON.stringify(result))
    }
}