let fs = require('fs');
let path = require('path');
console.log(__dirname);
console.log(__filename);

fs.readFile(path.join(__dirname,'./02-writeFile.txt'),'utf8',(err,data)=>{
  console.log(err,data);
})