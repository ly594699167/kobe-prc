//用户的登录注册退出
const md5 = require('md5')
const validate = require('validate.js')
const Admin = require('../models/Admin')
const reg = /^[a-zA-Z0-9_-]{4,16}$/;
//用户注册
exports.regiser= async function({loginId,loginPwd}){
    const rule = {
        loginId:{
            presence:{
                allowEmpty:false,
            },
            type:'string',
            format:reg,
        },
        loginPwd:{
            presence:{
                allowEmpty:false,
            },
            type:'string'
        }
    }
    const results =validate.validate({loginId,loginPwd},rule);
    loginPwd = md5(loginPwd);
    //查找用户是否已经注册过了
    const people = await Admin.findOne({
        where:{
            loginId,
        }
    });
    if(people && loginId===people.loginId){
        //说明用户已经注册过了
        return '用户已经注册过了';
    }
    const  result =await Admin.create({loginId,loginPwd},);
    return result.toJSON();
}
//用户登录
exports.login = async function({loginId,loginPwd}){
    const rule={
        loginId:{
            presence:{
                allowEmpty:false,
            },
            type:'string'
        },
        loginPwd:{
            presence:{
                allowEmpty:false,
            },
            type:'string'
        }
    }
    validate.validate({loginId,loginPwd},rule)
    loginPwd = md5(loginPwd);
    const result =await Admin.findOne({where:{
        loginId,
        loginPwd
    },
    attributes:['id','loginId']
}); 
 
    if(result && loginId ===result.loginId){
        //找到了对象
        return  result.toJSON();
    }
    return '账号或者密码错误';
}
//用户注销
exports.loginOut = async function(id){
    const result = Admin.destroy({
        where:{
            id,
        }
    })
    return result;
}
//通过id查询用户
exports.findById = async function(id){
    const result = await Admin.findByPk(id,{
        attributes:['id','loginId']
    })
    if(result){
        return result.toJSON();
    }
}
