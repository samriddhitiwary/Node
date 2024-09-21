// // get the reference of EventEmitter class of events module
// var events = require('events');

// //create an object of EventEmitter class by using above reference
// var em = new events.EventEmitter();

// //Subscribe for FirstEvent
// em.on('click', function (data) {
//     console.log(data);
// });

// em.on('OpenTheDoor', function (data) {
//     console.log(`I opened the door`);
// });

// // Raising FirstEvent
// em.emit('StoreInFridge', 'Package of Milk');