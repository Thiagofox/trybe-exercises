// Exercicio 03 - Parte 3 - bloco 7 - Dia 3 -> Testes Unitários

// 3 - Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');

const greaterThanTen = (array) => {
  const result = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      result.push(array[index]);
    }
  }
  return result;
};
console.log(greaterThanTen([4, 10, 32, 9, 21]))

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.strictEqual(typeof(greaterThanTen), 'function');
assert.deepStrictEqual(greaterThanTen(parameter), result);

// =======================================================================