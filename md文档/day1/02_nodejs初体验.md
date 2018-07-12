# node初体验

## REPL

> Read-Eval-Print-Loop ( **交互式解释器** )

- R ， read 读你写的代码
- E ， eval 执行你写的代码
- P ，print 如果有打印就打印
- L , loop 重复上面三步

### 例子

![](../img/REPL01.png)

```js
let a = 1; // 这边是你写R，和浏览器执行E的步骤
// 之后返回了undefined 打印P
```

## 编写程序

> - 命名文件注意事项
>
> 1. 不要用中文 
> 2. 不要包含空格 
> 3. 不要出现node关键字
> 4. 建议以 ' - '   分割单词 (例如: a-demo.js )
>
> - 编写代码常用规范
>
> 1. 命名: 变量名和函数名命名,按照驼峰命名 `let demoA = 1;`
>
> 2. 引入模块时,变量名最好和模块名一样: `let fs = require('fs')`
>
> 3. 正常使用单引号,嵌套内部使用双引号, json 数据使用双引号
>
> 4. 动态字符串使用 反引号
>
>    - ```js
>      let name = '张三';
>      let str = `这是${name};`;
>      ```
>
> 5. 操作符前后需要加空格`var foo = 'bar' + 'baz'`
>
> 6. 表达式结尾添加分号

### hello world

1. 创建`helloWorld.js`文件
2. 写上代码`console.log('hello world');`
3. 打开命令行，进入到对应的文件夹
4. 输入命令`node helloWorld.js ` 

```js
console.log('hello world');
```

```shell
node helloWorld.js
```

### fs文件模块

> nodejs会内置一些模块，方便实现功能。
>
> 使用的时候,直接通过`require('模块名')` 引入即可

#### 写入文件(异步)

```js
// 写入文件模块
let fs = require('fs'); // 读取
fs.writeFile(写到哪里,写什么数据,写的时候带的参数,回调) // 使用
```

- 例子

```js
// 02-writeFile.js
let fs = require('fs');
let data = '写入的数据';
fs.writeFile('./02-writeFile.txt',data,err=>{
  if(err)return;
})
```

```shell
node 02-writeFile.js
```

#### 写入文件(同步)

```js
fs.writeFileSync('./02-writeFile.txt',data);
// 就没有回调了,执行了就直接写
```

#### 读取文件(异步)

```js
let fs = require('fs');
fs.readFile(从哪里读取数据,用什么格式去读,回调);
// 回调是两个参数,err,data。
```

- 例子

```js
let fs = require('fs');
fs.readFile('./02-writeFile.txt', (err, data)=>{
  console.log(err,data);
  // null <Buffer e5 86 99 e5 85 a5 e7 9a 84 e6 95 b0 e6 8d ae>
});

// 转成人能看懂的东西。
console.log(err,data.toString());
// 或者
fs.readFile('./02-writeFile.txt','utf8', (err, data)=>{
  console.log(err,data);
})
```

> 默认读取出来的是一个buffer,Buffer 是一个缓冲 是一个字节数组  就是一种二进制数据 负责传输数据和文件
>
> 想要读取出人能看得懂的东西可以在第二个参数中传入'utf8',或者给data.toString();

#### 读取文件(同步)

- 要用一个变量来接收返回值

```js
let data = fs.readFileSync('./02-writeFile.txt','utf8');
console.log(data);
```

#### 注意点

1. 同步读取文件可以用try...catch来捕获异常，但是异步的不行，因为无论成功还是失败都会走回调。

```js
try {
  let data = fs.readFileSync('./abcd.txt','utf8');

  console.log(data)

}catch(err){

  // throw err
  console.log('读取时:'+err)
}

console.log(222) // 如果不try 222 就不执行了
```

### 路径模块path

> `__dirname` 获得当前文件所在目录的完整目录名
>
> `__filename`  获取当前模块文件的带有完整绝对路径的文件名
>
> 常用`path.join` 拼接路径名称来操作。

```js
// 04-path.js
let fs = require('fs');
let path = require('path');
console.log(__dirname);
// E:\studyNodeJs\例子\day01
console.log(__filename);
// E:\studyNodeJs\例子\day01\04-path.js

fs.readFile(path.join(__dirname,'./02-writeFile.txt'),'utf8',(err,data)=>{
  console.log(err,data);
})
// __dirname 不属于path模块，是node自带的
```

### http模块

> 可以创建一个http服务
>
> 步骤 ：
>
> 1. 引入http模块
> 2. 创建http服务
> 3. 监听
> 4. 启动

- 代码

```js
let http = require('http');  // 1 引入模块
let server = http.createServer(); // 2 创建http服务
// 3 监听
server.on('request',(req,res)=>{
  res.setHeader('content-type','text/html;charset=utf-8')
  res.write('hello world 中文乱码'); // 写在页面上的文字
  res.end(); // 服务器端没有数据返回到客户端 那么就可以用 res.end
});
// 4 启动服务
server.listen('8080',_=>{
  console.log('服务器已启动 http://127.0.0.1:8080')
})
```

> `res.end` 以后每次请求都要进行结束响应。
>
> `res.write` 写些东西在页面上，如果是中文会乱码，需要指定响应头
>
> `res.setHeader` 指定浏览器以什么样的方式解析内容
>
> - `content-type` 内容形式
> - `text/html`  以html形式解析
>   - `text/plain`  告诉浏览器以纯文本的格式进行解析内容
> - `charset=utf-8` 以 utf-8 编码格式解析文字

- 简写形式

```js
let http = require('http');
http.createServer((req,res)=>{
  res.setHeader('content-type', 'text/html;charset=utf-8')
  res.end('<h1>不会乱码</h1>');
}).listen('8082',_=>{
  console.log('http://127.0.0.1:8082');
});
```

#### http模块的url

> 根据不同的网页地址，返回不同的内容。
>
> 核心 `res.url `
>
> 就像给前端配置的路由

```js
// 根据不同的url 也就是网址的 /    
// http://127.0.0.1:8082/index
let http = require('http');
http.createServer((req,res)=>{
  console.log(req.url);
  res.setHeader('content-type','text/html;charset=utf-8;');
  res.end('成功');
}).listen('8082',_=>{
  console.log('开启');
})
```

- 命令行打印的`req.url`

```shell
/
/favicon.ico
```

- 注册路由

```js
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
    // 其他页 注意这点很重要，如果不判断其他会没有响应
    // http://127.0.0.1:8082/xx
    res.end('404 no found page')
  }
}).listen('8082',_=>{
  console.log('开启');
})
```

- 根据不同的路由返回不同的html页面

> 创建几个html用于返回
>
> 创建http服务，通过res.url判断
>
> 用fs模块读取文件，并res.end到页面上

```js
// 通过不同的路径返回不同的html页面
let http = require('http');
let fs = require('fs');
let path = require('path');
http.createServer((req,res)=>{
  if(req.url == '/' || req.url == 'index') {
    fs.readFile(path.join(__dirname,'./../05-respones-html/index.html'),(err,data)=>{
      if(err)throw err;  // 异常只要一抛出,后面就不会再执行了
      res.end(data);
    })
  }else {
    fs.readFile(path.join(__dirname,'./../05-respones-html/404.html'),(err,data)=>{
      if(err) throw err;
      res.end(data);
    })
  }
}).listen('8083',_=>{
  console.log('8083');
})
```

> 详见例子 05-http-html.js
>
> 注意点 : 
>
> 1. 路径都用`path.join`
> 2. `res.end() ` 后面传的参数可以是: <string> | <buffer>
> 3. 读取 html 文件,不用转化为字符串,直接以 buffer 的格式返回给浏览器  `res.end(data)`
> 4. 不用设置文件类型和编码,因为 html 界面里已经设置好
> 5. 读取文件,不需要判断文件是否存在。因为内部有个 error, 如果没有的话,会在 error 里面提示

#### 返回静态资源

> 通过服务器返回静态资源

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>访问静态资源</title>
  <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="./01-http-static.css">
</head>
<body>
    <h1>我是首页</h1>
    <img src="./dog.jpg" alt="">
</body>
</html>
```

```css
/*01-http-static.css*/
h1 {
  color: #ccc;
}
```

```js
// http访问静态资源 server.js
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
      res.end(data);
    });
  } else if (req.url == '/favicon.ico') {
    fs.readFile(path.join(__dirname,'./favicon.ico'),(err,data)=>{
      if(err) throw err;
      res.end(data);
    })
  } else if (req.url == '/dog.jpg') {
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
```

> 执行上面的例子之后，会发现页面会加载成我们想要的样子
>
> 但是浏览器报了警告
>
> `127.0.0.1/:9 Resource interpreted as Stylesheet but transferred with MIME type text/plain: "http://127.0.0.1:8084/01-http-static.css".`
>
> 本来是样式表的文件，使用了text/plain（普通文本来解析）
>
> 所以为了严谨起见，要给各类静态资源设定响应头

- 通过`res.setHeader('content-type','文件类型')`来设置响应头
- 所有的响应头设置都可以通过如下链接找到
  - [响应头参照](http://tool.oschina.net/commons)


- 设定响应头案例

```js
if (req.url == '/01-http-static.css') {
    fs.readFile(path.join(__dirname,'./01-http-static.css'),(err,data)=>{
      if(err)throw err;
      res.setHeader('content-type','text/css'); // 设置响应头
      res.end(data);
    });
  } else if (req.url == '/favicon.ico') {
    fs.readFile(path.join(__dirname,'./favicon.ico'),(err,data)=>{
      if(err) throw err;
      res.end(data);
    })
  }
```

> 设置后重新运行，发现不再报警告了。

#### 优化

> 一个项目的静态资源如此之多，不可能一个个去写if判断，所以将相同类型的文件设置相同的响应头即可
>
> 在此之前要先学一个mime包。
>
> mime包并不是nodejs内置的，所以需要用到npm包管理工具下载。

1. 创建文件夹（注意不能带有中文）
2. cd进这个文件夹，命令行输入 `npm init -y` 
3. `npm i mime -D`
4. 编写`server.js`

```
文件目录
static
	- .css
	- .jpg
index.html
server.js
```

- server.js

```js
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
```



## http服务常见的错误报告

```
- EACCES (Permission denied)
  - An attempt was made to access a file in a way forbidden by its file access permissions.
  - 访问被拒绝
- EADDRINUSE (Address already in use)
  - An attempt to bind a server (net, http, or https) to a local address failed due to another server on the local system already occupying that address.
  - 地址正在被使用（比如：端口号备占用）
- EEXIST (File exists)
  - An existing file was the target of an operation that required that the target not exist.
  - 文件已经存在
- EISDIR (Is a directory)
  - An operation expected a file, but the given pathname was a directory.
  - 给定的路径是目录
- ENOENT (No such file or directory)
  - Commonly raised by fs operations to indicate that a component of the specified pathname does not exist -- no entity (file or directory) could be found by the given path.
  - 文件 或 目录不存在
- ENOTDIR (Not a directory)
  - A component of the given pathname existed, but was not a directory as expected. Commonly raised by fs.readdir.
  - 给定的路径不是目录
```



