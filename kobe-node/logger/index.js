const log4js = require('log4js')
const path  = require('path')

log4js.configure({
    appenders:{
        defaults:{
            type:'dateFile',
            filename:path.resolve(__dirname,'logs','default','logginDefault.log')
        },
        //接口的路径
        api:{
            type:'file',
            keepFileExt:true,
            filename:path.resolve(__dirname,'logs','api','api.log'),
        }
    },
    categories:{
    default:{
        appenders:['defaults'],
        level:'all'
    },
    api:{
        appenders:['api'],
        level:'all',
    }
    }
})

process.on('exit',()=>{
    log4js.shutdown();
})
const logApi = log4js.getLogger('api');
module.exports = logApi