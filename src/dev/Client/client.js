var tls = require('tls');
var fs = require('fs');

var options = {
  // These are necessary only if using the client certificate authentication
  key: fs.readFileSync('pem/ssl-key.pem'),
  cert: fs.readFileSync('pem/ssl-cert.pem'),

  // This is necessary only if the server uses the self-signed certificate
  ca: [ fs.readFileSync('pem/ssl-cert.pem') ]
};

var socket = tls.connect(8008,'<TARGET_IP>',  options, function() {
  console.log('client connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  //process.stdin.pipe(socket);
});
socket.setEncoding('utf8');
socket.on('data', function(data) {
  console.log(data);
});
socket.on('end', function() {
  server.close();
});
