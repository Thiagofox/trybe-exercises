const service = require('../scripts/service');

test("#randomRgbColor", () => {
  // testando se a função foi chamada
  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});

// É PARA FALHAR 

// Matcher error : received value must be a mock or spy function