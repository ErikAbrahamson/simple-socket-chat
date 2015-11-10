var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var ejs = require('ejs');
var path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', function(req, res){
  res.render('index');
});

server.listen(3000, function(){
  console.log('listening on localhost:3000');
});

io.on('connection', function(socket){
  console.log("someone entered the chat room!");
});
