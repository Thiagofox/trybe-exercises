const teste = require('../scripts/functions');

describe('testando implementações', () => {
  test('mockando função para receber um parâmetro e retornar em caixa baixa', () => {
    const first = jest
      .spyOn(teste, 'firstFunction')
      .mockImplementation(a => a.toLowerCase());

    expect(first('UPPERCASE')).toBe('uppercase');
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith('UPPERCASE');

    teste.firstFunction.mockRestore();

    expect(teste.firstFunction('lowercase')).toBe('LOWERCASE');
  });
});