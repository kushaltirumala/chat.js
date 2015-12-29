var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	console.log('a user connected!');
	socket.on('chat message', function(msg) {
		io.emit('newmessage', msg)
	});
	socket.on('disconnect', function() {
		console.log('user disconnected');
	});
});

app.get('/user', function(req, res) {
	res.send('you cannot have user information?');
});

http.listen(3000, function() {
	console.log('Listening on port: 3000');
})