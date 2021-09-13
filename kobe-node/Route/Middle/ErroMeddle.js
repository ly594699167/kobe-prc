const errobj = require('./getResult')
module.exports = (err,req,res,next)=>{  
    if(err){
        let obj = err instanceof Error?err.message:err
        res.status(500).send(errobj.getErro(obj));
    }else{
         next();
    }
   
}