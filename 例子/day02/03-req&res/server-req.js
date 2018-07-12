let http = require('http');
http.createServer((req, res) => {
  // console.log(req.headers); // 返回响应头信息  对象格式
  // console.log(req.rawHeaders ); // 返回响应头信息 数组格式
  // {
  //   host: 'localhost:8080',
  //   connection: 'keep-alive',
  //   'cache-control': 'max-age=0',
  //   'upgrade-insecure-requests': '1',
  //   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.146 Safari/537.36',
  //   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  //   'accept-encoding': 'gzip, deflate, br',
  //   'accept-language': 'zh-CN,zh;q=0.9',
  //   cookie: 'optimizelyEndUserId=oeu1507790731931r0.9028084007621802; _ga=GA1.1.2048830350.1507691212'
  // }
  // ['Host',
  //   'localhost:8080',
  //   'Connection',
  //   'keep-alive',
  //   'Cache-Control',
  //   'max-age=0',
  //   'Upgrade-Insecure-Requests',
  //   '1',
  //   'User-Agent',
  //   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.146 Safari/537.36',
  //   'Accept',
  //   'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  //   'Accept-Encoding',
  //   'gzip, deflate, br',
  //   'Accept-Language',
  //   'zh-CN,zh;q=0.9',
  //   'Cookie',
  //   'optimizelyEndUserId=oeu1507790731931r0.9028084007621802; _ga=GA1.1.2048830350.1507691212'
  // ]
  console.log(req.httpVersion); // http版本 1.1
  console.log(req.method); // 请求的方式 GET
  console.log(req.url); // 请求的路径 /
  
  res.end();
}).listen(8080, _ => {
  console.log('success');


})