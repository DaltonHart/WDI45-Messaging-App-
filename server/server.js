var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);






//send index to front of server
app.get('/', function(req, res){
    res.sendfile('../client/index.html');
});

io.on('connection', function(socket){
    console.log('user connected');
    socket.on('chat message', function(msg){
        io.emit('chat message',msg);
    });
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

// listen
http.listen(3000, ()=>{
    console.log("Listening to port 3000");
  });