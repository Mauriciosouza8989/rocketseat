/*const { EventEmitter } = require('events');
const ev = new EventEmitter;


este aquiemite todos emits que tiver.

ev.on('Saysomething', (msg) => {
    console.log('I heard you: ', msg);

});

este aqui só vai emitir umavez.
ev.once('Saysomething', (msg) => {
    console.log('I heard you: ', msg);

});

ev.emit('Saysomething', "Maurício");
ev.emit('Saysomething', "Mayk");*/

const { inherits } = require('util');
const { EventEmitter } = require('events');


function character(name) {
    this.name = name;
}
inherits(character, EventEmitter);

const chapolin = new character('Chapolin colorado');
chapolin.on('help', () => {
    console.log(`Eu, o ${chapolin.name}!!!`);
})
console.log('Oh, e agora, quem poderá me defender?');
chapolin.emit('help')