// 简写形式
let http = require('http');
http.createServer((req,res)=>{
  res.setHeader('content-type','text/html;charset=utf-8');
  res.end('<h1>成功</h1>');
}).listen('8082',_=>{
  console.log('开启');
});