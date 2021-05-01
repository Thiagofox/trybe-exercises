// Exercicio 02 - Parte 1 - bloco 7 - Dia 3 -> Testes Unitários

/*
1 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
  
  1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado

  2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

  3 .Verifique se o array passado por parâmetro não sofreu alterações

  4 .Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

console.log(myRemove([1, 2, 3, 4], 3));

assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
const array = [9, 8, 7, 6];
myRemove(array, 9);
assert.deepStrictEqual(array, [9, 8, 7, 6]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

// ======================================================================================================================