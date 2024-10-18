const EventEmitter = require('events');


// Create Class

class MyEmitter extends EventEmitter {}


// Init object 
const myEmiter = new MyEmitter();

// Event listern
myEmiter.on('event', () => console.log('Event fired!'));


// Init event
myEmiter.emit('event');