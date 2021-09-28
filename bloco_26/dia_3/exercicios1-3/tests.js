// Agora a prática

// ===========================================================================

// Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":

//   - Essa função irá receber um número como parâmetro e retornar uma string como resposta;

//   - Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";

//   1. Descreva todos os cenário de teste utilizando describes ;

//   2. Descreva todos os testes que serão feitos utilizando its ;

//   3. Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.

const { expect } = require('chai');

const typeNumbers = require('./typeNumbers');

describe('Testa execução da função typeNumbers', () => {

  describe('Quando o numero for maior que 0', () => {
  
    it('Deve retornar uma string', () => {
      const resultado = typeNumbers(5);
      expect(resultado).to.be.a('string');
    });
  
    it('Deve retornar a palavra "Positivo"', () => {
      const resultado = typeNumbers(5);
      expect(resultado).to.be.equal('Positivo');
    });
  
  });
  
  describe('Quando o numero for menor que 0', () =>  {
  
    it('Deve retornar uma string', () => {
      const resultado = typeNumbers(-5);
      expect(resultado).to.be.a('string'); 
    });

    it('Deve retornar a palavra "Negativo"', () => {
      const resultado = typeNumbers(-5);
      expect(resultado).to.be.equal('Negativo');
    });

  });

  describe('Quando o numero for igual a 0', () => {

    it('Deve retornar uma string', () => {
      const resultado = typeNumbers(0);
      expect(resultado).to.be.a('string');
    });

    it('Deve retornar a palavra "Neutro"', () => {
      const resultado = typeNumbers(0);
      expect(resultado).to.be.equal('Neutro');
    });

  });

/* 
Exercício 3 Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo Number .

  1. Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a Number para a função;

  2. Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";

  3. Implemente em sua função tal validação para que o teste passe. 
*/

  describe('Quando o parametro passado à função não é um numero', () => {
    
    it('Testa se o parametro passado é uma string', () => {
      const resultado = typeNumbers('Thiago');
      expect(resultado).to.be.a('string');
    });

    it('Deve obeter o retorno: "PARAMENTRO INCORRETO! DEVE SER UM NÚMERO"', () => {
      const resultado = typeNumbers('Thiago');
      expect(resultado).to.be.equal('PARAMENTRO INCORRETO! DEVE SER UM NÚMERO');
    });

  });

});

// ===========================================================================


