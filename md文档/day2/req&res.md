# req&res

> [node HTTP 官网](https://nodejs.org/dist/latest-v6.x/docs/api/http.html)
>
> 官网对应api : **request ( http.IncomingMessage )  **和 **response ( http.ServerResponse )**

## request 对象

> 服务器解析用户提交的 http 请求报文，将结果解析到 request 对象中。凡是要获取和用户请求相关的数据都可以通过 request 对象获取

- 常用的req对象属性

### headers

```js
let http = require('http');
http.createServer((req, res) => {
  console.log(req.headers); // 返回响应头信息  对象格式
  console.log(req.rawHeaders ); // 返回响应头信息 数组格式
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
  res.end();
}).listen(8080, _ => {
  console.log('success');
})
```

- user-agent 

> 人家默认的,不要动它,,知道也没用,,也改变不了

- upgrade-insecure-requests

> 是否可使用更高的版本进行通信

- accept

> accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
>
> 浏览器端可以接受的媒体类型

- accept-encoding

> 'accept-encoding': 'gzip, deflate, br'
>
> 浏览器申明自己接收的编码方法 通常指定压缩方法，是否支持压缩，支持什么压缩方法（gzip，deflate）

- accept-language

> 'accept-language': 'zh-CN,zh;q=0.8,en;q=0.6'
>
> 浏览器申明自己接收的语言。

### httpVersion

```js
  console.log(req.httpVersion); // http版本 1.1
```

### method

```js
console.log(req.method); // 请求的方式 GET
```

### url

```js
  console.log(req.url); // 请求的路径 /
```

## respones对象

> 所有要告知浏览器的行为都是通过它

### write & end

> 都是写入信息到浏览器，一般用end就行了

### setHeader

> 设置响应报文头，告诉浏览器解析文本是以什么格式解析,又以什么编码格式解析

### statusCode 

> 设置或者读取 http 状态码

### statusMessage 

> 设置或读取 http 响应状态消息

```js
// 返回400
// let http = require('http');
// http.createServer((req, res) => {
//   res.statusCode = 400; // 设置返回的状态码
//   res.statusMessage = 'ok'; // 设置返回的状态信息
//   res.setHeader('content-type','text/plain;charset=utf8');
//   res.write('失败');
//   res.end();
// }).listen(8080, _ => {
//   console.log('success');
// })
// 返回200
let http = require('http');
http.createServer((req, res) => {
  res.statusCode = 200; // 设置返回的状态码
  res.statusMessage = 'success'; // 设置返回的状态信息
  res.setHeader('content-type','text/plain;charset=utf8');
  res.write('成功');
  res.end();
}).listen(8080, _ => {
  console.log('success');
})
```

### writeHead

> 它是状态码、状态信息和响应头的简写形式

```js
http.createServer((req, res) => {
  res.writeHead(200,'success',{
    'content-type': 'text/plain;charset=utf8',
  });
  res.write('成功');
  res.end();
}).listen(8080, _ => {
  console.log('success');
})
```





