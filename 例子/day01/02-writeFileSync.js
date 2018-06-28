let fs =require('fs');
let data = '异步写入文件'
fs.writeFileSync('./02-writeFile.txt',data);