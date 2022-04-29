//(function () {

//!ES6-----------------------------------------------------------------
// import { whiteboard } from './whiteboard.js';
//import io from 'socket.io-client';
//var socket = io(window.location.origin);
//!-----------------------------------------------------------------



// var whiteboard = window.whiteboard;  //variable global whiteboard, que viene de whiteboard.js
var whiteboard = require('./whiteboard.js');

//var socket = window.io(window.location.origin); //requiere el socket.io-client
var io = require('socket.io-client');
var socket = io(window.location.origin); //requiero el socket.io-client - configura la primer parte del whiteboard para que después podamos pintar, etc



socket.on('connect', function() {
    console.log('Connected!');
});

socket.on('load', function(strokes) {

    strokes.forEach(function(stroke) {
        var start = stroke.start;
        var end = stroke.end;
        var color = stroke.color;
        whiteboard.draw(start, end, color, false);
    });

});

socket.on('draw', function(start, end, color) {
    whiteboard.draw(start, end, color, false);
});

whiteboard.on('draw', function(start, end, color) {
    socket.emit('draw', start, end, color);
});

//})();