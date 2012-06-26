var http = require('http');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/ab(.:format)?', function(req, res) {
	res.render('ab.jade', { title: "25c Inc." });
});

app.get('/terms(.:format)?', function(req, res) {	
	res.render('terms.jade', { title: "Terms of Use" });
});

app.get('/test(.:format)?', function(req, res) {	
	res.render('test.jade', { title: "Button Tests" });
});

app.get('/script(.:format)?', function(req, res) {	
	res.render('script.jade', { title: "HTML/Script Button Test", NODE_ENV: process.env.NODE_ENV });
});

app.get('/iframe(.:format)?', function(req, res) {	
	res.render('iframe.jade', { title: "IFRAME Button Test", NODE_ENV: process.env.NODE_ENV });
});

app.get('/privacy(.:format)?', function(req, res) {	
	res.render('privacy.jade', { title: "Privacy Policy" });
});

app.get('*', function(req, res){
  res.redirect('http://www.25c.com/');
});

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
