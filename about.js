var http = require('http');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/terms', function(req, res) {	
	res.render('terms.jade', { title: "Terms of Service" });
});

app.get('/privacy', function(req, res) {	
	res.render('privacy.jade', { title: "Privacy Policy" });
});

app.get('*', function(req, res){
  res.redirect('http://www.25c.com/');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
