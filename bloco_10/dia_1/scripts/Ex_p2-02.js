// Parte II - Exercicio 02

// 2 - A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

function techList(tech, name) {
  let result = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  tech.sort().forEach(element => {
    result.push({ tech: element, name });
  });
  return result;
}

module.exports = techList;