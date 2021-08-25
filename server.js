// creating a read stream of a file -----------------------

var fs = require('fs');
var _ = require('lodash');
// var stream = fs.ReadStream(__dirname + '/loream.txt', 'utf8');
// var  writeStream = fs.WriteStream(__dirname+'/chuunkWrite.txt');

// stream.on('data',(chunk)=>{
//   // console.log('new data recieved', chunk);
//   writeStream.write(chunk);
// })

// - streamlining the bove way using pipe======

// var stream = fs.ReadStream(__dirname + '/loream.txt', 'utf8');
// var  writeStream = fs.WriteStream(__dirname+'/chuunkWrite.txt');

// stream.pipe(writeStream);



var http= require('http');
// lodash exmaple --------------- utility package can be used to do many things -------------- this function will run only once
var hello = _.once(()=>{
    console.log('hello my frnd');
})
hello();
hello();

var server = http.createServer((req,res)=>{
    // console.log('request is coming from the url' +  req.url);
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end('this is my response to you');
    // var stream = fs.ReadStream(__dirname + '/index.html', 'utf8');
    // stream.pipe(res);

    path = './components';

    switch(req.url){
        case '/':
            path+='/index.html';
            res.statusCode =200;
            break;
        case '/about':
            path+='/about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            // set code for redirection which is 301
            res.statusCode = 301;
            res.setHeader('Location','/about');
            break;
        default:
            path+='/404.html';
            res.statusCode = 404;
            break;
    }


    res.setHeader('content-type','text/html');
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    });
});

server.listen(7000);
console.log('server started listening');