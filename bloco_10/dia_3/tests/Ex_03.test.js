const teste = require('../scripts/MathRandom');

describe("testando implementações", () => {
  test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
    teste.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(teste.randomNumber(2, 3, 4)).toBe(24);
    expect(teste.randomNumber).toHaveBeenCalled();
    expect(teste.randomNumber).toHaveBeenCalledTimes(1);
    expect(teste.randomNumber).toHaveBeenCalledWith(2, 3, 4);
  });

  test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
    teste.randomNumber.mockReset();
    expect(teste.randomNumber).toHaveBeenCalledTimes(0);

    teste.randomNumber.mockImplementation(a => a * 2);

    expect(teste.randomNumber(5)).toBe(10);
    expect(teste.randomNumber).toHaveBeenCalled();
    expect(teste.randomNumber).toHaveBeenCalledTimes(1);
    expect(teste.randomNumber).toHaveBeenCalledWith(5);
  });
});