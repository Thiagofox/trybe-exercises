/* 
Rodando tudo junto

Promises são executadas assim que são criadas. Isso quer dizer que, no código abaixo, todos os arquivos serão lidos ao mesmo tempo e, portanto, não teremos uma forma de saber quando cada um vai terminar de ser lido. Mas e se precisarmos do resultado da leitura dos três arquivos?

Entra no palco: Promise.all !

O Promise.all é um método da Promise que nos permite passar um array de Promises e receber, de volta, uma única Promise. Ela será resolvida com os resultados de todas as Promises, assim que todas elas forem resolvidas. Esse método também nos permite utilizar um único catch , que será chamado caso qualquer uma das Promises seja rejeitada.

Vamos reescrever quase o mesmo código que fizemos lá em cima, que utilizamos para mostrar como Promises evitam o callback hell. Desta vez, vamos escrever, no final, a soma do tamanho de todos os arquivos. Além disso, vamos utilizar o módulo ('fs').promises para não precisarmos trabalhar com callbacks manualmente. */

const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });

// Ótimo! Agora, estamos lendo os três arquivos ao mesmo tempo, e nosso .then será executado quando a leitura de todos eles terminar, recebendo como parâmetro um array com o resultado de cada uma das Promises.
