# NPM

## npm是什么

> 官方定义 : npm 是一个JavaScript包管理器，并且是世界上最大的软件登记处。发现可重用代码，并集成代码包到项目中的全新的、强大方式。npm 让JavaScript开发者共享和重用代码变的更容易，同时也让我们更容易地更新正在被共享的代码
>
> 就是一个超大的插件管理平台
>
> [npm 官方网站 ](https://www.npmjs.com/)   
>
> [npm 官方文档](https://docs.npmjs.com/)

## npm与node的关系

> npm是Node.js默认的软件包管理系统。安装完毕node后，会默认安装好npm
>
> npm本身也是基于Node.js开发的包

## 安装

> 安装完毕node.js后会自动安装npm
>
> 查看当前npm版本：`npm -v `  
>
> 更新 npm `npm i npm@latest -g` 
>
> 降级 npm:  `npm i npm@3.10.10 -g    // @后面写具体版本`    
>
> npm 初始化 `npm init -y` 
>
> npm 卸载别的包 `npm ui jquery`
>
> npm 安装别的包 `npm i jquery`
>
> - `npm i jquery -S` 把下载名称保存在 package.json 里的 `dependencies` (生产阶段)
> - `npm i jquery -D` 把下载名称保存在 package.json 里的 `devDependencies`   (开发阶段)
>
> npm 版本信息 `npm -v`

### 本地安装

> 就是把包安装到项目中去
>
> 1. 打开命令行，`npm i 想要的包名 -D `
> 2. 在代码中通过`require`加载包
>
> 注意：通过`npm install 包名`安装的包，会自动下载到当前目录下的`node_modules`目录下，如果该目录不存在，则创建，如果已存在则直接下载进去。

```js
// 命令行
// 1.  npm init
// 2. npm i jquery -S
// 3. 引入 server.js
let $ = require('jquery');
```

### 全局安装

> 就是把一个包变成了一个命令行工具
>
> 比如 `mime` 这个包可以给你识别文件类型
>
> 全局安装就不用npm init了 直接通过 `npm i 包 -g`
>
> 安装`mime`到全局

- 没有全局安装之前

```powershell
mime .\server.js
mime : 无法将“mime”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次。
所在位置 行:1 字符: 1
+ mime .\server.js
+ ~~~~
    + CategoryInfo          : ObjectNotFound: (mime:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
```

- 全局安装之后

```powershell
mime .\server.js
application/javascript
```

- 推荐安装live-server

> 可以开启一个简易服务器
>
> `npm i live-server -g`
>
> 运行 `live-server`

## 模块和包的区别

模块可以是任何一个文件或目录（目录下可以有很多个文件），只要能被node.js通过require()即可。

在 node 的世界里,每一个文件都是一个模块;

包是一个文件或目录（目录下可以有多个文件）必须有一个package.json文件来描述，就可以是一个包。

总结: 模块包括包.

## node.js 错误调试：

1. 当开启服务后，在浏览器中输入地址，如果出现浏览问题，首先要先看 服务器控制台是否报错。如果报错，直接根据服务器报错进行排错。
2. 打开浏览器开发者工具中的 “网络” 部分，查看请求是否成功发出去了

- 看一下请求报文是不是和我们想的一样
- 响应状态码

## 其他

### 淘宝镜像:

```js
//淘宝镜像
npm config set registry https://registry.npm.taobao.org

//检测是否设置成功
npm config get registry
```



### cnpm

```
1. npm 安装 cnpm  
   npm i cnpm -g
2. 检查  cnpm   
    cnpm -v
3. 安装其他包:
   cnpm  i bootstrap -S
```



### yarn

```
1. npm 安装 yarn  
   npm i yarn -g
2. 检查  yarn   
    yarn -v
3. 安装其他包:
   yarn add underscore 
```

