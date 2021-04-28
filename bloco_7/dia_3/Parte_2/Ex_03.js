// Exercicio 03 - Parte 2 - bloco 7 - Dia 3 -> Testes Unitários


// 3 - Escreva a função sumAllNumbers para passar nos testes já implementados.  

const assert = require('assert');

function sumAllNumbers(array) {
  let result = 0;
  for (let index = 0; index < array.length; index += 1) {
    result += array[index];
  }
  return result;
}
console.log(sumAllNumbers([9, 23, 10, 3, 8]));

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

// ===========================================================================