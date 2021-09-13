const jwt = require('jsonwebtoken')
//秘钥
let secret ='kebo'
//cookie
let cookieToken = 'for24'
//对令牌进行加密
exports.encode = (res,maxAge=3600*24,info={})=>{
    const token = jwt.sign(info,secret,{
        expiresIn:maxAge
    })
    //添加到cookie中
    res.cookie(cookieToken,token,{
        maxAge:maxAge*10000,
    })
    //添加到其他端中
    res.header('authorization',token)
}
//对令牌进行解码
exports.decode =(req)=>{
    //获取token
    let token = req.cookies[cookieToken];
    if(!token){
        //从其他地方获取
        token = req.headers.authorization;
        if(!token){
            return null;
        }
        //在头部中获取到了token 
        token = token.split(' ')[1];
    }
    //对token进行解码
   const result = jwt.verify(token,secret);
    return result;
}