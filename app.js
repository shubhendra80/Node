const express = require('express');

const app = express();


//  using middleware (express.static) for givijg access to static files in public folder
app.use(express.static('public'));

app.get('/',(req,res)=>{
    // res.send('<h1>hey this is an express app</h1>');
    res.sendFile('./components/index.html',{root: __dirname})
})

app.get('/about',(req,res)=>{
    // res.send('<h1>hey this is an express app</h1>');
    res.sendFile('components/about.html',{root: __dirname});
})


app.get('/about-me',(req,res)=>{
    res.redirect('/about');
})
// use is used for default case 
app.use((req,res)=>{
    res.sendFile('components/404.html',{root: __dirname})
})

app.listen(7000);
console.log('express app started');