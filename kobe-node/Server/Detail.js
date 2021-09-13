//查找各种新闻
const Detail = require('../models/Detaile')

//查找所有新闻
exports.findAllNews = async function(){
    const result = await Detail.findAll();
    if(result){
        return JSON.parse(JSON.stringify(result));
    }
}
//通过navid超找
exports.findByNavId = async function(id){
    const result = await Detail.findAll({
        where:{
            NavId:id,
        },
        attributes:['id','title','content','image','time']
    })
    if(result){
        let data = JSON.parse(JSON.stringify(result));
        return data;
    }
    return null;
}
//通过id查找当前信息
exports.findById = async function(id){
    const result = await Detail.findByPk(id,{
        attributes:['id','title','content','image','time']
    });
    if(result){
        let data = result.toJSON()
        return data;
    }
    return null;
}
//分页查询
exports.findByPage = async function(page=1,limit=10){
    const result = await Detail.findAndCountAll({
       limit:+limit,
       offset:+(page-1)*limit,
       attributes:['id','title','content','image','time']
    })
    let obj = {
        count:result.count,
        data:JSON.parse(JSON.stringify(result.rows))
    }
    return obj
}