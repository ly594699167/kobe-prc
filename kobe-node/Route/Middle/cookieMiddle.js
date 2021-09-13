//对cookie进行解析
const {getErro} = require('./getResult')
const { pathToRegexp } = require('path-to-regexp')
const {decode} = require('./jwt')
//请求时需要携带tooken的
const arr = [
    {method:'GET',path:'/news/nav/detail:id'},
    {method:'GET',path:'/news/:id'},
    {method:'GET',path:'/images/:id'},
    {method:'GET',path:'/admin/whoami'}
]
module.exports = (req,res,next)=>{
    const map = arr.filter((ele,i)=>{
        let reg = pathToRegexp(ele.path);
        return ele.method === req.method && reg.test(req.path);
    })
    if(map.length === 0){
        next();
        return ;
    }
    //解码
    const result = decode(req);
    if(!result){
        //解码不成功
        handleNomToken(req,res,next);
        return ;
    }
    //解码成功
    req.id = result.id;
    next();
}

function handleNomToken(req, res, next) {

    res.status(403).send(getErro("you dont have any token to access the api", 403))
}