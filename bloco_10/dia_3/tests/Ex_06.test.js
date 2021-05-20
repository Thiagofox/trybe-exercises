const teste = require('../scripts/fetch_dog');
describe('testando a requisição', () => {
  teste.fetchDog = jest.fn();
  afterEach(teste.fetchDog.mockReset);

  test('testando requisição caso a promisse resolva', async () => {
    teste.fetchDog.mockResolvedValue('request sucess');

    teste.fetchDog();
    expect(teste.fetchDog).toHaveBeenCalled();
    expect(teste.fetchDog).toHaveBeenCalledTimes(1);
    expect(teste.fetchDog()).resolves.toBe('request sucess');
    expect(teste.fetchDog).toHaveBeenCalledTimes(2);
  });

  test('testando requisição caso a promisse seja rejeitada', async () => {
    teste.fetchDog.mockRejectedValue('request failed');

    expect(teste.fetchDog).toHaveBeenCalledTimes(0);
    expect(teste.fetchDog()).rejects.toMatch('request failed');
    expect(teste.fetchDog).toHaveBeenCalledTimes(1);
  });
});