var http = require('http');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/ab(.:format)?', function(req, res) {
	res.render('ab.jade', { title: "25c Inc." });
});

app.get('/terms(.:format)?', function(req, res) {	
	res.render('terms.jade', { title: "Terms of Use" });
});

app.get('/privacy(.:format)?', function(req, res) {	
	res.render('privacy.jade', { title: "Privacy Policy" });
});

app.get('*', function(req, res){
  res.redirect('http://www.25c.com/');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
