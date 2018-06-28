// http访问静态资源
let fs = require('fs');
let http = require('http');
let path = require('path');

http.createServer((req,res)=>{
  if(req.url=='/') {
    fs.readFile(path.join(__dirname,'./01-http-static.html'),(err,data)=>{
      if(err)throw err;
      res.end(data);
    });
  } else if (req.url == '/01-http-static.css') {
    fs.readFile(path.join(__dirname,'./01-http-static.css'),(err,data)=>{
      if(err)throw err;
      res.setHeader('content-type','text/css');
      res.end(data);
    });
  } else if (req.url == '/favicon.ico') {
    fs.readFile(path.join(__dirname,'./favicon.ico'),(err,data)=>{
      if(err) throw err;
      res.end(data);
    })
  } else if (req.url == '/dog.jpg') {
    res.setHeader('content-type','image/jpeg');
    fs.readFile(path.join(__dirname, './dog.jpg'), (err, data) => {
      if (err) throw err;
      res.end(data);
    })
  }else {
    res.end('404');
  }
}).listen('8084',_=>{
  console.log('http://127.0.0.1:8084/');
  
})