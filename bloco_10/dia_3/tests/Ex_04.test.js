const teste = require('../scripts/functions');
jest.mock('../scripts/functions');

describe('testando implementações', () => {
  test('mockando função para receber um parâmetro e retornar em caixa baixa', () => {
    teste.firstFunction.mockImplementation(a => a.toLowerCase());

    expect(teste.firstFunction('UPPERCASE')).toBe('uppercase');
    expect(teste.firstFunction).toHaveBeenCalled();
    expect(teste.firstFunction).toHaveBeenCalledTimes(1);
    expect(teste.firstFunction).toHaveBeenCalledWith('UPPERCASE');
  });

  test('testa a função que recebe um parâmetro e retorna a última letra', () => {
    teste.secondFunction.mockImplementation(a => a.charAt(a.length - 1));

    expect(teste.secondFunction('letter')).toBe('r');
    expect(teste.secondFunction).toHaveBeenCalled();
    expect(teste.secondFunction).toHaveBeenCalledTimes(1);
    expect(teste.secondFunction).toHaveBeenCalledWith('letter');
  });

  test('mockando função que recebe 3 parâmetros e os concatena', () => {
    teste.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));

    expect(teste.thirdFunction('tr', 'y', 'be')).toBe('trybe');
    expect(teste.thirdFunction).toHaveBeenCalled();
    expect(teste.thirdFunction).toHaveBeenCalledTimes(1);
    expect(teste.thirdFunction).toHaveBeenCalledWith('tr', 'y', 'be');
  });
});