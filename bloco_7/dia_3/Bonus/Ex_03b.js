// Exercicio 03 - Bonus - bloco 7 - Dia 3 -> Testes Unitários
/*
Bônus 3

Escreva a função removeMiddle para passar nos testes já implementados.
*/

const assert = require('assert');
// escreva a função removeMiddle aqui

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);

// ======================================================================================================================
