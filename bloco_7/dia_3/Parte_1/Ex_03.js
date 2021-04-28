// Exercicio 03 - Parte 1 - bloco 7 - Dia 3 -> Testes Unitários

/*
3 - A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array

  1. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado

  2. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

  3. Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações

  4. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
*/
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  let len = arr.length;
  for (let index = 0; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }
  return arr;
}
console.log(myRemoveWithoutCopy([1, 2, 3, 4], 3));

const array = [1, 2, 3, 4];

assert.deepStrictEqual(typeof myRemoveWithoutCopy, 'function');
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
myRemoveWithoutCopy(array, 2);
assert.deepStrictEqual(array.length, 3);
assert.deepStrictEqual(myRemoveWithoutCopy([7, 8, 9, 10], 8), [7, 9, 10]);