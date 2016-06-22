var tls = require('tls');
var fs = require('fs');

var options = {
  key: fs.readFileSync('ssl/ssl-key.pem'),
  cert: fs.readFileSync('ssl/ssl-cert.pem'),
  requestCert: true,
};

var server = tls.createServer(options, function(socket) {
  console.log('server connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  socket.write("welcome!\n");
  socket.setEncoding('utf8');
  socket.pipe(socket);
});
server.listen(8008, function() {
  console.log('server bound');
});
