// Exercício 4 Crie testes para uma função que escreverá um conteúdo em um arquivo específico.

//   - Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.

//   - Após concluir a escrita do arquivo ela deverá retornar um ok.

//   1. Descreva todos os cenários de teste utilizando describes ;

//   2. Descreva todos os testes que serão feitos utilizando its ;

//   3. Crie as asserções validando se o retorno da função possui o valor e tipo esperado.

const fs = require('fs'); 
const sinon = require('sinon');
const { expect } = require('chai');

const writeFile = require('./writeFile');

describe('Executa a função writeFile', () => {
  
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });
  
  describe('Verifica se', () => {

    it('O retorno é uma string', () => {
      const resposta = writeFile('arquivo.txt', 'teste exercicio corse');
      expect(resposta).to.be.a('string');
    });
  
    it('Retorna uma a palavra "ok"', () => {
      const resposta = writeFile('arquivo.txt', 'teste exercicio corse');
      expect(resposta).to.be.equal('ok')
    });

  });

});

// ================================================================================

// Exercício 5 Implemente a função descrita no exercício 4.

//   1. Crie a função descrita no exercício 4 utilizando o módulo fs do node.

//   2. Adapte os testes adicionando stub ao módulo utilizado do fs , isolando assim o teste.

//   3. Garanta que todos os testes escritos no exercício 4 irão passar com sucesso.