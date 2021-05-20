const teste = require ('../scripts/MathRandom');

test('testa se a função foi chamada, seu retorno, e quantas vezes ela foi chamanda', () => {
  teste.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(teste.randomNumber(10, 2)).toBe(5);
  expect(teste.randomNumber).toHaveBeenCalled();
  expect(teste.randomNumber).toHaveBeenCalledTimes(1);
  expect(teste.randomNumber).toHaveBeenLastCalledWith(10, 2);
})