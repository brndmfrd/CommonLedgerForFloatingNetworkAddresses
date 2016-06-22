var tls = require('tls');
var fs = require('fs');

var options = {
  // This is necessary only if the server uses the self-signed certificate
  ca: [ fs.readFileSync('ssl/ssl-cert.pem') ]
};

var socket = tls.connect(8008,'localhost',  options, function() {
  console.log('client connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
});
socket.setEncoding('utf8');
socket.on('data', function(data) {
  console.log(data);
});
socket.on('end', function() {
  server.close();
});
