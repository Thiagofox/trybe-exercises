// Exercicio 5 - Bloco 8 - Dia 5 => JavaScript ES6 - spread operator, parâmetro rest, destructuring e mais

// Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:

// Dica: use array destructuring .

const assert = require('assert');

const myList = [1, 2, 3];

const swap = ([frst, sec, thrd]) => [thrd, sec, frst];
const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);