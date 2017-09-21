const express = require('express');
const app = express();
const fs = require('fs-extra');
const path = require('path');
const request=require('request');
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true')
    next();
};
let api="http://www.17getfun.com";
let dataList="";
let dataList2="";
let dataList3="";
let dataList4="";
app.use(allowCrossDomain);
//const template = fs.readFileSync('./index.html','utf-8')
//const vueServerRenderer = require('vue-server-renderer');
app.all('*', function (req, res, next) {
    if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
    else next();
});
app.use(express.static('./build'))

//app.get('/', function (req, resp) {
//  const filePath = path.join(__dirname, './build/vue-ssr-bundle.json')
//  const code = fs.readJsonSync(filePath);
//  const bundleRenderer = vueServerRenderer.createBundleRenderer(code, {
//      template: template
//  });
//  bundleRenderer.renderToString((err,html) => {
//      if (err) {
//          console.log(err.message);
//          console.log(err.stack);
//      }
//      // console.log(html);
//      resp.send(html)
//  });
//})

//导航数据接口 http://backup.17getfun.com//api/channel/allChannels
app.use("/data1",(req,res,next)=>{
    request(api+'/api/channel/allChannels',function(error,response,body){
        if(!error&&response.statusCode==200){
            body=JSON.parse(body)
            dataList2=body.data;
            console.log(dataList2)
        }
    })
    res.send({
        dataList2
    })
})

//默认精选页面数据接口 http://backup.17getfun.com/discovery/discoveryFrontPageing?page=1&pageSize=30
app.use('/getdata', (req, res, next) => {
    request(api+"/discovery/discoveryFrontPageing?page=1&pageSize=30", function (error, response, body) {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body)
             console.log(body.data)
            dataList=body.data;
        }
    })
    res.send({
        "code": 1,
        dataList,
        "msg": "",
        "showMsg": ""
    })
})
//各个频道切换的数据接口 http://backup.17getfun.com/discovery/channelContentsPaging?channelId=23&page=1&pageSize=30&tagSize=35
app.use('/user', (req, res, next) => {
     let Id=req.query.id;
//   console.log(api+"/discovery/channelContentsPaging?channelId="+Id+"&page=1&pageSize=30&tagSize=35")
    request(api+"/proxy/api/user/personal/published?userId="+Id+"&size=9", function (error, response, body) {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body)
            dataList=body.data;
        }
    })
    res.send({ 
        dataList,  
    })
})

app.use('/content', (req, res, next) => {
     let Id=req.query.id;
     let position=req.query.position;
    request(api+"proxy/discovery/contentDetail?size=20&position="+position+"&id="+Id, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body)
            dataList2=body.data;
            console.log(dataList2)
        }
    })
    res.send({ 
        dataList2,  
    })
})
//专栏内容数据接口 http://backup.17getfun.com/discovery/channelContentsPaging?channelId=37&page=1&pageSize=30&tagSize=35
app.use("/data3",(req,res,next)=>{
    request(api+'/discovery/channelContentsPaging?channelId=37&page=1&pageSize=30&tagSize=35',function(error,response,body){
        if(!error&&response.statusCode==200){
            body=JSON.parse(body)
            dataList3=body.data;
        }
    })
    res.send({
        dataList3
    })
})

//标签页数据
app.use("/data4",(req,res,next)=>{
    request(api+'/discovery/allKeys',function(error,response,body){
        if(!error&&response.statusCode==200){
            body=JSON.parse(body)
            dataList4=body.data;
        }
    })
    res.send({
        dataList4
    })
})
app.listen(5000, () => {
    console.log('Listen 5000')
})