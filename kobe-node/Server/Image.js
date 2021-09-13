//查找图片
const Image = require('../models/Image')
exports.findAll = async function(){
    const result = await Image.findAll();
    if(result){
        let data = JSON.parse(JSON.stringify(result));
        return data
    }
}
//通过id查询
exports.findById = async function(id){
    const result = await Image.findByPk(id);
    if(result){
        return result.toJSON();
    }
}
//通过页面查询
exports.findByPage = async function(page=1,limit =10){
    const result = await Image.findAndCountAll({
        limit:+limit,
        offset:+(page-1)*limit
    })
    let obj = {
        count:result.count,
        data:JSON.parse(JSON.stringify(result.rows))
    }
    return obj
}