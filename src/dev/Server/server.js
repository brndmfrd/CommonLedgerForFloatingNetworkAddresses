var fs = require('fs'); 
var https = require('https'); 
var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 4433;

var options = { 
    key: fs.readFileSync('ssl/server-key.pem'), 
    cert: fs.readFileSync('ssl/server-crt.pem'), 
    ca: fs.readFileSync('ssl/ca-crt.pem'), 
    requestCert: true, 
    rejectUnauthorized: true
}; 

var app = express();
var server = require('https').createServer(options, app);
server.listen(port, function(){
  console.log('Server listening on port %d', port);
});

// Routing
app.use(bodyParser.json())
//app.use(express.static(__dirname + '/public'));


/*
https.createServer(options, function (req, res) { 
    console.log(new Date()+' '+ 
        req.connection.remoteAddress+' '+ 
        req.socket.getPeerCertificate().subject.CN+' '+ 
        req.method+' '+req.url); 
    
    res.socket.setEncoding('utf8');
  
    res.writeHead(200); 
    res.end('Success;' +new Date() + '\n'); 
}).listen(4433);
*/




// routes
app.get('/hey', function(req, res) {
    res.send('HEY!');
});
app.post('/ho', function(req, res) { 
    console.log(new Date()+' '+ 
        req.connection.remoteAddress+' '+ 
        req.socket.getPeerCertificate().subject.CN+' '+ 
        req.method+' '+req.url); 
      
    //res.writeHead(200); 
    res.send('Success;' +new Date() + '\n'); 
});