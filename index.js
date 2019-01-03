const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const fs = require('fs');

io.on('connection', (socket) => {
  console.log('connected');
  socket.on('query-directory', (path, fn) => {
    console.log('query-directory', path);
    fs.readdir(path, (err, items) => {
      console.log(err, items);
      fn(items);
    });
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});