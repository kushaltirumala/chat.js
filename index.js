var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.get('/user', function(req, res) {
	res.send('you cannot have user information?');
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Listening on port: ', port);
})