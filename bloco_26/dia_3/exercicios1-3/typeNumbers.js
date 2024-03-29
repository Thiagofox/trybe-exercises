// Exercício 2 : Implemente a função apresentada no exercício 1, garantindo que ela irá passar em todos os testes que você escreveu.

// DICA : Lembre-se de adicionar o script de test no package.json e de instalar as dependências.

// ------------------------------------------------------------------------
/* 
Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":

- Essa função irá receber um número como parâmetro e retornar uma string como resposta;

- Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro"; 
*/
// ----------------------------------------------------------------------- 

/* 
Exercício 3 Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo Number .

  1. Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a Number para a função;

  2. Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";
  
  3. Implemente em sua função tal validação para que o teste passe. 
*/

function typeNumbers (num) {
  if(typeof num !== 'number'){
    return 'PARAMENTRO INCORRETO! DEVE SER UM NÚMERO';
  }

  if(num > 0){
    return 'Positivo';
  }

  if(num < 0){
    return 'Negativo';
  }

  return 'Neutro'
}

module.exports = typeNumbers;