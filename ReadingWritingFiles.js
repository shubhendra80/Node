var fs = require('fs');
//  asynchronous way of reading a file
fs.readFile('fileToBeRead.txt','utf8',(err,data)=>{
    fs.writeFile('WriteOnMe.txt',data, ()=>{});
});
