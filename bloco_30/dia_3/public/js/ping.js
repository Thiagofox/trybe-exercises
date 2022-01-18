const socket = window.io(); 
/* 
window.io() , isso serve para enfatizar que a função io é uma função injetada ao objeto window do DOM da página. Dessa forma, conseguimos seguir utilizando nosso socket, mas agora em um arquivo separado 
*/

const button = document.querySelector('#pingButton');
      button.addEventListener('click', (e) => {
        socket.emit('ping');
        return false;
      });

      /*
      Busca o botão PING via Document, adiciona um evento ao clicar no botão PING, front-end emite um evento para o nosso back-end através da função socket.emit
      */
     
      function createMessage(message) {
        const ulMessage = document.querySelector('#messages');
        const li = document.createElement('li');
        li.innerText = message;
        ulMessage.appendChild(li);
      };

      /*
      Funcção createMessage - busca a ul messages via document - cria um li - coloca dentro dessa li a messagem que veio por paramentro - coloca essa li dentro da ul
      */

      socket.on('ola', (msg) => {
        createMessage(msg);
      });

      socket.on('pong', (msg) => {
        createMessage(msg);
      });
      // Quando nosso evento `ola` for emitido, vamos pegar a string mensagem enviada pelo nosso evento e passar para a função `createMessage`
      /*
      Identifica o socket emit do Back pelo parametro 'ola' e na callback recebe a mensagem: 
      'Que bom que você chegou aqui!' e chama a função que ira exibir ela na tela passando 
      essa mesnagem como parametro
      */