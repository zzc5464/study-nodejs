// 通过不同的路径返回不同的html页面

let http = require('http');
let fs = require('fs');
let path = require('path');
http.createServer((req,res)=>{
  if(req.url == '/' || req.url == 'index') {
    fs.readFile(path.join(__dirname,'./05-respones-html/index.html'),(err,data)=>{
      if(err)throw err;
      res.end(data);
    })
  }else {
    fs.readFile(path.join(__dirname,'./05-respones-html/404.html'),(err,data)=>{
      if(err) throw err;
      res.end(data);
    })
  }
}).listen('8083',_=>{
  console.log('8083');
  
})