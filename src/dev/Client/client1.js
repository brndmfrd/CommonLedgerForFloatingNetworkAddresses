var fs = require('fs'); 
var https = require('https'); 

var options = { 
    hostname: 'localhost', 
    port: 4433, 
    path: '/ho', 
    method: 'POST', 
    key: fs.readFileSync('ssl/client1-key.pem'), 
    cert: fs.readFileSync('ssl/client1-crt.pem'), 
    ca: fs.readFileSync('ssl/ca-crt.pem') }; 

var req = https.request(options, function(res) { 
    res.on('data', function(data) { 
        process.stdout.write(data); 
    }); 
}); 

req.end(); 

req.on('error', function(e) { 
    console.error(e); 
});
