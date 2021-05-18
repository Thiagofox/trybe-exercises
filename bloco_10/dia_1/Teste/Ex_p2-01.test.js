// Parte II - Exercicio 01
/*
1 - Para as funções encode e decode crie os seguintes testes:
- Teste se encode e decode são funções;
- Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
- Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
- Teste se as demais letras/números não são convertidos para cada caso;
- Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
*/

const { encode, decode } = require('../script/Ex_p2-01');

describe('Testa a função encode e decode', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });

  it('a função decode é definida', () => {
    expect(decode).toBeDefined();
  });

  it('testa se a função encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });

  it('testa se a função encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });

  it('testa se a função encode converte as vogais a, e, i, o, u são em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('aeiou')).toEqual('12345');
  });

  it('testa se a função decode converte os números 1, 2, 3, 4 e 5 em a, e, i, o, u , respectivamente', () => {
    expect(decode('12345')).toEqual('aeiou');
  });

  it('Testa se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('thiago').length).toEqual(6);
  });

  it('Testa se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(decode('th31g4').length).toEqual(6);
  });
});
