// Exercicio 04 - Parte 3 - bloco 7 - Dia 3 -> Testes Unitários

// 4 - Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');

function secondThirdSmallest(array) {
  let result = []
  array.sort((function (a, b){return a - b}));
  result.push(array[1]);
  result.push(array[2]);
  return result;
};
console.log(secondThirdSmallest([4, 10, 32, 9, 21, 90, 5, 11, 8, 6]))

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.strictEqual(typeof secondThirdSmallest, 'function');
assert.deepStrictEqual(secondThirdSmallest(parameter), result);

// =======================================================================