let fs = require('fs');
fs.readFile('./02-writeFile.txt','utf8', (err, data)=>{
  console.log(err,data);
})