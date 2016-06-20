const net = require('net');

const client = net.connect(8008, 'localhost', function() {
	console.log('Write to the socket!');
	process.stdin.pipe(client);
});

client.on('data', function(data) {
	console.log('Received: ' + data);
});

client.on('close', function() {
	console.log('Connection closed');
});

client.on('end', function() {
	client.close();
});
