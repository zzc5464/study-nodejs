let fs = require('fs');
let http = require('http');
let path = require('path');
let mime = require('mime');

http.createServer((req,res)=>{
  if(req.url == '/' || req.url == '/index') {
    fs.readFile(path.join(__dirname,'./index.html'),(err,data)=>{
      if(err) throw err;
      res.end(data);
    })
  }if(req.url.startsWith('/static')) {
    res.setHeader('content-type',mime.getType(req.url));
    fs.readFile(path.join(__dirname,req.url),(err,data)=>{
      if(err) throw err;
      res.end(data);
    })
  }
}).listen('8080',_=>{
  console.log('成功');
  
})