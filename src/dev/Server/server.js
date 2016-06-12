var tls = require('tls');
var fs = require('fs');

var options = {
  key: fs.readFileSync('pem/ssl-key.pem'),
  cert: fs.readFileSync('pem/ssl-cert.pem'),

  // This is necessary only if using the client certificate authentication.
  requestCert: true,

  // This is necessary only if the client uses the self-signed certificate.
  ca: [ fs.readFileSync('pem/ssl-cert.pem') ]
};

var server = tls.createServer(options, function(socket) {
  console.log('server connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  socket.write("welcome!\n");
  socket.setEncoding('utf8');
  //socket.pipe(socket);
});
server.listen(8008, function() {
  console.log('server bound');
});
