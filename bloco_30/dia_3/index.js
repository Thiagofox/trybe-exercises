const express = require('express');
const app = express();
const path = require('path')

const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3001', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }
});
/*
Implementando a instância do socket.io usando a função io e passando dois parâmetros
- O objeto http que é um servidor HTTP;
- Um objeto options para definir a regra de CORS para definir que vamos aceitar 
conexões do cliente que acessar pela URL http://localhost:3000 usando verbos GET e POST.
*/

app.use(express.static(__dirname + '/public'));  // acesso aos arquivos dentro do diretório public adicionando a seguinte linha de código

require('./sockets/ping')(io); // require necessario para o arquivo ping.js ter acesso ao modulos do io na pasta sockets
require('./sockets/chat')(io);  // require necessario para o arquivo chat.js ter acesso ao modulos do io na pasta sockets

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // devolvendo um arquivo chamado /index.html 
});

http.listen(3001, () => {
  console.log('Servidor ouvindo na porta 3001');
});