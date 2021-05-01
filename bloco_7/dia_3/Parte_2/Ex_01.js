// Exercicio 01 - Parte 2 - bloco 7 - Dia 3 -> Testes Unitários

// 1 - Escreva a função addOne para passar nos testes já implementados.

const assert = require('assert');

function addOne (array) {
  const output = [];
  for (let index = 0; index < array.length; index += 1) {
    output.push(array[index] + 1);
  }
  return output;
};

console.log(addOne([1, 2, 3, 4]));

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

// ========================================================================