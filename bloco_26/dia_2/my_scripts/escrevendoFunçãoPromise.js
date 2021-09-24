/* 
Pra entender melhor, vamos usar um exemplo prático: vamos escrever uma função que promete ler arquivos do dia. Antes de começar, no entanto, vamos dar uma olhada na sintaxe da criação de uma Promise.

Sempre que precisarmos criar uma nova Promise, invocaremos o construtor através da palavra-chave new . Para esse construtor, devemos passar uma função, que é chamada de executor ; é ela quem vai, de fato, tentar cumprir a promessa que estamos fazendo. A função executor recebe outras duas funções como parâmetros: resolve e reject . Isso tudo fica assim: */


const p = new Promise((resolve, reject) => {
  // Aqui é onde vamos realizar a lógica que precisamos
  // para "tentar cumprir" a promessa
});

/* 
Feito isso, o próximo passo é escrever o código que, de fato, resolve a Promise. Já combinamos que nossa função promete ler um arquivo. Então, agora, vamos colocar dentro da função executor o código que busca resolver essa promessa:*/

const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });

  });
}

/* 
Vamos entender o que estamos fazendo aqui:

  - Recebemos, como parâmetro, o nome do arquivo que queremos ler, fileName na função readFilePromise(fileName) ;

  - Criamos e retornamos uma nova Promise, Promise((resolve, reject) => {};

  - Chamamos o módulo nativo do node, fs , para realizar a leitura desse arquivo, fs.readFile(fileName, (err, content) => {}) ;
  
  - Dentro da callback fs.readFile(fileName, (err, content) => {}) que passamos para a função readFile , verificamos se ocorreu um erro ( if (err) ). Se sim   rejeitamos a Promise e encerramos a execução - reject(err) ;

  - Caso não tenha acontecido nenhum erro, resolvemos a Promise com o resultado da leitura do arquivo - resolve(content) .

Dessa forma, quem chamar nossa função poderá consumir os resultados da leitura do arquivo ou tratar qualquer erro que ocorrer utilizando Promises.
Antes de prosseguir, para entender como podemos consumir uma Promise, vamos nos atentar a alguns detalhes:

  - A função que passamos para a Promise só consegue retornar um resultado através da função resolve que ela recebe. Por isso, o fato de chamarmos return reject(err) não faz diferença, já que a Promise será rejeitada, e o retorno da callback passada para readFile é simplesmente ignorado. Na verdade, isso geralmente é válido para qualquer callback. Como callbacks geralmente são chamadas para lidar com resultados, seu retorno raramente importa para a função que a chamou ou que recebeu esses resultados.

  - resolve e reject são os nomes das funções que a Promise passa para a função executor . No entanto, para nós, elas são apenas parâmetros que são passados pra nossa função. Logo, não importa muito o nome que damos a elas, pois para o JavaScript isso é indiferente. De qualquer forma, chamar essas funções de qualquer outra coisa não é considerado uma boa prática, pois pode dificultar a legibilidade do código.

Dito isso, vamos agora entender como podemos consumir essa Promise. Vimos antes que Promises permitem que a callback de erro seja registrada de determinada forma e que callbacks de sucesso sejam registradas de outra forma. Note o uso do plural aqui: utilizando Promises, podemos definir mais de uma callback de sucesso.

Vamos a um exemplo de como podemos consumir a Promise que estamos retornando da nossa função logo acima: */

// ...

readFilePromise('./file.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso ela cumpra o que prometeu
    console.log(`Lido arquivo com ${content.byteLength} bytes`); // Escrevo o resultado no console
  })
  .catch((err) => { // Caso ela não cumpra o que prometeu
    console.error(`Erro ao ler arquivo: ${err.message}`); // Escrevo o erro no console
  });

  /* 
  Por que isso é importante? Essa funcionalidade nos permite criar estruturas de pipeline , em que uma operação recebe como entrada o resultado da operação anterior, e esses resultados todos podem ser compostos e formar um único resultado de forma extremamente fácil!

  Para demonstrar isso, e como Promises tornam o código mais legível, vamos reescrever o código que nos levou ao callback hell mas, dessa vez, utilizando Promises: */

  const fs = require('fs');

  function readFilePromise (fileName) {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, (err, content) => {
        if (err) return reject(err);
        resolve(content);
      });
    });
  }
  
  readFilePromise('file1.txt') // A função me promete que vai ler o arquivo
    .then((content) => { // Caso arquivo 1 seja lido,
      console.log(`Lido file1.txt com ${content.byteLength} bytes`); // Escrevo o resultado no console
      return readFilePromise('file2.txt'); // Chamo novamente a função, que me retorna uma nova Promise
    })
    .then(content => { // Caso a Promise retornada pelo `then` anterior seja resolvida,
      console.log(`Lido file2.txt com ${content.byteLength} bytes`); // Escrevemos o resultado no console
      return readFilePromise('file3.txt'); // E chamamos a função novamente, recebendo uma nova promessa
    })
    .then((content) => { // Caso a promessa de leitura do `file3.txt` seja resolvida,
      console.log(`Lido file3.txt com ${content.byteLength} bytes`); // Logamos o resultado no console
    })
    .catch((err) => { // Caso qualquer uma das promessas ao longo do caminho seja rejeitada
      console.log(`Erro ao ler arquivos: ${err.message}`); // Escrevemos o resultado no console
    });
    
// E nada mais de callback hell! Agora temos um código muito mais simples de interpretar e que não vai nos dar dor de cabeça quando precisarmos modificar. 😁