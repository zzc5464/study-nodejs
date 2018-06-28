// 根据不同的url 也就是网址的 /    
// http://127.0.0.1:8082/index
let http = require('http');
http.createServer((req,res)=>{
  console.log(req.url);
  res.setHeader('content-type','text/html;charset=utf-8;');
  // 注册路由  if
  if (req.url === '/' || req.url === '/index') {
    // http://127.0.0.1:8082/index
    res.end('这是  index 首页')
  } else if (req.url === '/login') {
    // http://127.0.0.1:8082/login
    res.end('这是  login 登录页')
  } else if (req.url === '/register') {
    // http://127.0.0.1:8082/register
    res.end('这是  register 注册页')
  } else {
    // 其他页
    res.end('404 no found page')
  }
}).listen('8082',_=>{
  console.log('开启');
})