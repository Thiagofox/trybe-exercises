// ./funcoes/calculadora.js
// Aqui podemos escrever testes pensando o comportamento da função `calculadora` que presume o bom comportamento das funções que integram ela: `soma`, `subtracao`, `multiplicacao`, `divisao`

// const { soma, subtracao, multiplicacao, divisao } = require("./calculo");
const soma = require("./calculo/soma");
const subtracao = require("./calculo/subtracao");
const multiplicacao = require("./calculo/multiplicacao");
const divisao = require("./calculo/divisao");

const calculadora = (valorA, valorB, operacao) => {
  switch(operacao) {
    case "soma":
      soma(valorA, valorB);
      break;
    case "subtracao":
      subtracao(valorA, valorB);
      break;
    case "multiplicacao":
      multiplicacao(valorA, valorB);
      break;
    case "divisao":
      divisao(valorA, valorB);
      break;
    default:
      break;
  }
};
calculadora(4, 5, 'subtracao');

module.exports = calculadora;

// Esse contexto fica mais evidente, quando temos operações mais complexas nos nossos testes, como operações que envolvem leitura de arquivos e consultas no banco de dados para composição de informações