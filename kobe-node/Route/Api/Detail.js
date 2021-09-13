//查询新闻信息

const express = require('express');
const router = express.Router();
const Detail = require('../../Server/Detail');
const {getResult} = require('../Middle/getResult')

router.get('/all',async(req,res)=>{
    const result = await Detail.findAllNews();
    res.send(getResult(result))
})
//通过导航id获取
router.get('/nav/detail/:id',async (req,res)=>{
    const result = await Detail.findByNavId(req.params.id);
     res.send(getResult(result));
})
//通过翻页查询
router.get('/page',async (req,res)=>{
    const result = await Detail.findByPage(page=req.query.page, limit=req.query.limit)
    res.send(getResult(result))
})
//通过id得到详情
router.get('/:id',async (req,res)=>{
    const result = await Detail.findById(req.params.id);
    res.send(getResult(result))
})
//得到所有的信息

module.exports = router;