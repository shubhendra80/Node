const count = (arr) =>{
    console.log('This array has '+ arr.length + ' elements');
}
// count(['1sheep','2shwwp','3sheep']);

const add =(x,y)=>{
    // return(`added the numbers and the value is = ${x+y}`);
    console.log(`added the numbers and the value is = ${x+y}`)
}
module.exports.count= count;
module.exports.add = add;
