// Exercicio 02 - Parte 3 - bloco 7 - Dia 3 -> Testes Unitários

// 2 - Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require ('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let count = 0;
  console.log(characters)

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      count += 1
      results.push([count]);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};

console.log(removeVowels('thiago'));

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof(removeVowels), 'function')
assert.deepStrictEqual(removeVowels(parameter), result);

// =======================================================================