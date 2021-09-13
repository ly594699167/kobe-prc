const express = require('express');
const router = express.Router();
const { getResult } = require('../Middle/getResult')
const Image = require('../../Server/Image');

//通过分页查询图片
router.get('/page',async (req,res)=>{
    const result =  await Image.findByPage(page=req.query.page,limit=req.query.limit) 
    res.send(getResult(result))
})
//通过id查找到页面
router.get('/:id',async (req,res)=>{
    const result = await Image.findall(req.params.id);
    res.send(getResult(result))
})
module.exports = router;