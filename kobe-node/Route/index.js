const express = require('express');
const adminRoute = require('./Api/Admin')
const detailRoute = require('./Api/Detail')
const images = require('./Api/Image')
const master =require('./Api/Master')
const nav = require('./Api/Nav')
const app = express();
const path = require('path')
// const public = path.resolve(__dirname,'../client/kobe.vue/public')

const histroy = require('connect-history-api-fallback');
app.use(histroy())
//跨域中间件
const cors = require('cors');
const cookieParser = require('cookie-parser')

app.use(cookieParser())

//允许跨域的origin
const whitelist =['http://localhost:8080']
//解析cookie中间件
// app.use(express.static(public))
app.use(require('./Middle/cookieMiddle'));
app.use(express.json());
app.use(cors({
    origin: function (origin, callback) {
        if(!origin){
            callback(null,'*');
            return ; 
        }
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
      },
      credentials:true
}))

app.use(require('./Middle/logger'))
app.use('/admin',adminRoute)
app.use('/news',detailRoute)
app.use('/images',images)
app.use('/master',master)
app.use('/nav',nav)

app.use(require('./Middle/ErroMeddle'))
app.listen(5600,()=>{
    console.log('this is for you kobe.Bryant')
})