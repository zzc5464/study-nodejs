let http = require('http'); // 引入
let server = http.createServer();// 创建
let i = 0;
server.on('request',(req,res)=>{
  console.log(req,res);
  
  // i++;
  // console.log(`请求${i}次`); // 会请求两次,第一次是请求ico图标
  res.write('hello world 中文乱码'); // 写在页面上的文字
  res.end(); // 服务器端没有数据返回到客户端 那么就可以用 res.end
});
server.listen('8081',_=>{
  console.log('服务器已启动','http://127.0.0.1:8081');
})

// 笔记没写