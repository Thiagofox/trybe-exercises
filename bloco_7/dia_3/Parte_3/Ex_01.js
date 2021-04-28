// Exercicio 01 - Parte 3 - bloco 7 - Dia 3 -> Testes Unitários

// 1 - Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require ('assert');

const greetPeople = (array) => {
  let exit = [];
  for (let index = 0; index < array.length; index += 1) {
    exit.push(`Hello ${array[index]}`)
  }
  return exit;
};
console.log(greetPeople(['Irina', 'Ashleigh', 'Elsa']));

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof(greetPeople), 'function')
assert.deepStrictEqual(greetPeople(parameter), result);


// =======================================================================