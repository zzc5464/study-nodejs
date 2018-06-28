let fs = require('fs');
let http = require('http');
let path = require('path');
let mime = require('mime');

http.createServer((req, res) => {
  console.log(req.url);
  
  if (req.url == '/') {
    fs.readFile(path.join(__dirname, './index.html'), (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (req.url.startsWith('/static')) {
    fs.readFile(path.join(__dirname, req.url), (err, data) => {
      if (err) throw err;
      res.setHeader('content-type', mime.getType(req.url));
      console.log('设置响应头', req.url);

      res.end(data);
    });
  } else {
    res.end('404');
  }
}).listen('8085', _ => {
  console.log('http://127.0.0.1:8085/');

})