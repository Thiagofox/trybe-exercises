const teste = require('../scripts/MathRandom');

test('testa se a função foi chadama, seu retorno e a quantidade de vezes que ela foi chamada', () => {
  teste.randomNumber = jest.fn().mockReturnValue(10);

  expect(teste.randomNumber()).toBe(10);
  expect(teste.randomNumber).toHaveBeenCalled();
  expect(teste.randomNumber).toHaveBeenCalledTimes(1);
});

