//得到科比的信息
const express = require('express')
const router = express.Router();
const {getResult } = require('../Middle/getResult')
const Master = require('../../Server/Master')

router.get('/info',async(req,res)=>{
    const result = await Master.getInfo();
    res.send(getResult(result));
})

module.exports = router;