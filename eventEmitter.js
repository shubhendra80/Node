var events = require('events');

// example of a basic emitter --
// myEmitter = new events.EventEmitter();
// myEmitter.on('doingSomethingFishy',(name)=>{
//     console.log(name + ' is doing some thing fishy');
// });

// myEmitter.emit('doingSomethingFishy','shubh');


// exampple of a better use of a emitter ====

class Person extends events{
    constructor(name){
        super();
        this.name = name;

    }
}

const shubh = new Person('shubh');
const leon = new Person('leon');

let people = [shubh, leon];

people.forEach((guy)=>{
    guy.on('speaking',(mssg)=>{
        console.log(`${guy.name} said ${mssg}`)
    })
})

shubh.emit('speaking', 'what the hell man');
leon.emit('speaking', 'its alright man calm down');