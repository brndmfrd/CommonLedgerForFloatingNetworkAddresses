var net = require('net');

var server = net.createServer(function(socket) {
  console.log('client connected');
  
  socket.write('I hear you.\n');
  
  socket.pipe(socket);

  socket.on('end', function(){
    console.log('client disconnected');
  });

  socket.on('error', function(err){
    throw err;
  });
});

server.listen(8008, 'localhost', function() {
  console.log('server bound');
});

