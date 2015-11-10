$(function() {
  var socket = io();

  $('form').submit(function(event) {
    event.preventDefault();
    var message = $('#m').val();

    socket.emit('chat message', message);
    $('#m').val('');
  });

  socket.on('chat message', function(event) {
    $('#messages').append($('<li>').text(event));
  });
});
