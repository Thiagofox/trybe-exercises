// Exercicio 04 - Bonus - bloco 7 - Dia 3 -> Testes Unitários
/*
Bônus 4

Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo a função aos poucos.
*/

const getLargestNumber = (array) => {
  let largestNumber;
  for (let index = 0; index < array.length - 1; index += 1) {
      if (array[index] > array[index + 1]) {
          largestNumber = [array[index]];
      }
  }
  return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;


// ======================================================================================================================
