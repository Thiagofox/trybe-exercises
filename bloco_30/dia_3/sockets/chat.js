module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('clientMessage', (msg) => {
      console.log(`Mensagem ${msg}`);
      io.emit('serverMessage', msg);
    });
  });
}