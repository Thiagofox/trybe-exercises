/* 
Exercicio 6 - Vamos criar mais um script. Dessa vez, para calcular a velocidade média de um carro numa corrida

  1. A fórmula para calcular velocidade média é distância / tempo .

  2. Armazene o script no arquivo velocidade.js.

  3. Agora, permita que o script seja executado através do comando npm run velocidade . Para isso, crie a chave velocidade dentro do objeto scripts no package.json .

  4. Utilize o readline-sync para solicitar os dados à pessoa.

  5. Considere a distância em metros e o tempo em segundos. Repare que, agora, estamos trabalhando com números inteiros. */


const readline = require('readline-sync');

function calcVelocity() {
  const distancia = readline.questionFloat('Informe a distancia percorrida(m):');
  const tempo = readline.questionFloat('Informe o tempo gasto(s):');

  const result = (distancia / tempo).toFixed(2);

  console.log(`A velocidade média é de: ${result} m/s`);
}

calcVelocity()