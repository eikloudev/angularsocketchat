var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('User über Socket connected...');

    socket.on('disconnect', 
                () => console.log('User von Socket getrennt!')
             );

    socket.on('message', 
                msg => io.emit('message', {type: 'new-message',
                                            text: msg})
             );

});



http.listen(8000, () => {
    console.log('Express + Socket-Server running on Port 8000...');
});