module.exports = (io) => {
  io.on('connection', (socket) => { // 1
    console.log(`Usuário conectado. ID: ${socket.id} `);
    
    socket.emit('ola', 'Que bom que você chegou aqui!'); // 3
    
    socket.on('ping', () => { //2
      console.log(`${socket.id} emitiu um ping!`);
      io.emit('pong', `${socket.id} enviou um ping!`); // 4
    });
  });
};

/*
1- Essa função vai ser executada sempre que um novo client se conectar ao servidor
Dentro dessa função passamos um segundo parâmetro que é um callback com um parâmetro socket
Este parâmetro é a representação de uma conexão aberta ao socket-io rodando no nosso back-end
No objeto socket temos um atributo id que é uma string aleatória que é gerada a cada nova conexão
*/

/*
2- A função socket.on() cria um listener , ou seja, uma forma de detectar quando algum cliente emitir um evento personalizado para o servidor. No caso, criamos um listener para o evento ping . Podemos fazer um paralelo da função socket.on com a função document.addEventLintener que faz o registro de um listener de eventos do DOM como o clique em um botão ou ao digitar algo em uma caixa de texto.
*/

/*
3- Usamos uma string para enviar uma mensagem, mas podemos usar outros tipos de dados, como um número, uma data, um objeto, entre outros tipos 
*/

/*
4- dentro do listener do evento ping , usamos a função io.emit , em vez de socket.emit
*/