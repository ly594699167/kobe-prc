const express = require('express');
const router = express.Router();
const { getResult } = require('../Middle/getResult')
const Nav = require('../../Server/Nav');
router.get('/info',async (req,res)=>{
    
    const result = await Nav.getNav();
  
    res.send(getResult(result))
})

module.exports = router;