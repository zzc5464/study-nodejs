let fs = require('fs');
let data = '写入的数据';
fs.writeFile('./02-writeFile.txt',data,err=>{
  if(err)return;
})