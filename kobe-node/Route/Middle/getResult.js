//获取结果错误
exports.getErro = (err='this is a bad request',errcode = 500)=>{
    return {
        code:errcode,
        message:err,
       
    }
}
exports.getResult = (data)=>{
    
    return {
        code:0,
        message:'success',
        data,
    }
}