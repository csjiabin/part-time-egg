'use strict';

// or http://127.0.0.1:7001/chat
const socket = require('socket.io-client')('http://localhost:7001');

socket.on('connect', () => {
  console.log('connect!');
  // socket.emit('chat', 'hello world!');
  setInterval(() => {
    socket.emit('message', {
      context: Math.random(),
      user: '123',
      roomId: "room110"
    });
  }, 1000);

});

socket.on('res', msg => {
  console.log('res from server: %s!', msg);
});
socket.on('110', msg => {
  console.log('room110 from server: %s!', msg);
});
