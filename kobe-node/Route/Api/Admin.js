//用户登录注册删除查找的路由
const express = require('express');
const router = express.Router();
const Admin = require('../../Server/Admin')
const {encode} = require('../Middle/jwt')
//用户注册
const {getResult} = require('../Middle/getResult');
const { get } = require('cheerio/lib/api/traversing');
router.post('/regiser',async(req,res)=>{
  
    const loginId = req.body.loginId;
    const loginPwd = req.body.loginPwd;
    const result = await Admin.regiser({loginId,loginPwd}
);
    res.send(getResult(result));
})
//用户登录
router.get('/login',async (req,res)=>{
    const loginId = req.query.loginId;
    const loginPwd = req.query.loginPwd
    const result = await Admin.login({loginId,loginPwd});
    if(result){
        //添加jwt
        encode(res,3600*24,{id:result.id})
        res.send(getResult(result));
    }
  
})
//我是谁
router.get('/whoami/:id',async(req,res)=>{
    const result = await Admin.findById(req.params.id)
    console.log(result,'id')
    if(result){
        encode(res,3600*24,{id:result.id})
        res.send(getResult(result))
    }else{
        res.send(getResult(false))
    }
    
})

module.exports = router