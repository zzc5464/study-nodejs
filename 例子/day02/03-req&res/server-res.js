let http = require('http');
// http.createServer((req, res) => {
//   res.statusCode = 400; // 设置返回的状态码
//   res.statusMessage = 'ok'; // 设置返回的状态信息
//   res.setHeader('content-type','text/plain;charset=utf8');
//   res.write('失败');
//   res.end();
// }).listen(8080, _ => {
//   console.log('success');
// })

// http.createServer((req, res) => {
//   res.statusCode = 200; // 设置返回的状态码
//   res.statusMessage = 'success'; // 设置返回的状态信息
//   res.setHeader('content-type', 'text/plain;charset=utf8');
//   res.write('成功');
//   res.end();
// }).listen(8080, _ => {
//   console.log('success');
// })

// 简写

http.createServer((req, res) => {
  res.writeHead(200,'success',{
    'content-type': 'text/plain;charset=utf8',
  });
  res.write('成功');
  res.end();
}).listen(8080, _ => {
  console.log('success');
})