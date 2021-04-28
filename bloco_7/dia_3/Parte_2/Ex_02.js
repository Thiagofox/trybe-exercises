// Exercicio 02 - Parte 2 - bloco 7 - Dia 3 -> Testes Unitários


// 2 - Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');

function wordLengths (array) {
  const result = [];
  for (let index = 0; index < array.length; index += 1) {
    result.push(array[index].length);
  }
  return result;
};

console.log(wordLengths(['sun', 'potato', 'roundabout', 'pizza']));

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

// ===========================================================================