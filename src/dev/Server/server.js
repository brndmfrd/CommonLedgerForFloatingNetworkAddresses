var fs = require('fs'); 
var https = require('https'); 
var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post');

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

app.post('/api/post/addy/update', function(req, res) { 
    console.log(new Date()+' '+ 
        req.connection.remoteAddress+' '+ 
        req.socket.getPeerCertificate().subject.CN+' '+ 
        req.method+' '+req.url); 
      
    var post = new Post({
        clientName:req.socket.getPeerCertificate().subject.CN,
        clientAddress:req.connection.remoteAddress
    });

    post.save(function(err, post){
        if(err){
            return next(err)
        }
        //res.status(201).json(post)
        
        res.send('Success;' +
            new Date() + ';' +
            req.socket.getPeerCertificate().subject.CN + ';' +
            req.connection.remoteAddress + ';' +
            '\n');
    });
});
