/* 
Exercício 1 - Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.

  1. A fórmula para calcular o IMC é peso / altura ^ 2 .
  Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.

  2. Comece criando um novo pacote node com npm init e respondendo às perguntas do npm .

  3. Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura .

  4. Armazene o script no arquivo imc.js . 
*/

/* 
const peso_115kg = 115;
const altura_1m_75cm = 175;

function calculaImc() { 
  const peso = peso_115kg;
  const altura = altura_1m_75cm;

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);
}

calculaImc(); 
*/

/* 
Exercício 2 - Agora, permita que o script seja executado através do comando npm run imc

  1. O novo script criado deve conter o comando que chama o node para executar o arquivo imc.js . 
*/

//package.json - adicionado
// {
//   // ...
//   "scripts": {
//     // ...
//     "imc": "node imc.js"
//   }
//   // ...
// }

/* 
Exercício 3 - Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.

  1. Você já utilizou o pacote readline-sync para esse fim. Que tal utilizar o mesmo pacote?

  2. Substitua os valores fixos de peso e altura por dados informados pela pessoa ao responder as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal.
 */

/* 
const readline = require('readline-sync')

function calculaImc() { 

const peso= readline.question('Qual o seu peso? (em KG)');
const altura = readline.question('Qual a sua altura? (em CM)');

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);
}

calculaImc(); */

/* 
Exercício 4 - Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.

  1. O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre o método adequado para realizar input de floats.

  2. Encontrou a função? Show! Agora utilize-a para solicitar o input de peso. */

/*   
const readline = require('readline-sync')

function calculaImc() { 

const peso= readline.questionFloat('Qual o seu peso? (em KG)');
const altura = readline.questionFloat('Qual a sua altura? (em CM)');

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);

calculaImc(); */

/* 
Exercício 5 - Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:

Considere a seguinte tabela para classificar a situação do IMC:

| IMC                                       | Situação                  |
| ----------------------------------------- | ------------------------- |
| Abaixo de 18,5                            | Abaixo do peso (magreza)  |
| Entre 18,5 e 24,9                         | Peso normal               |
| Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
| Entre 30,0 e 34,9                         | Obesidade grau I          |
| Entre 35,0 e 39,9                         | Obesidade grau II         |
| 40,0 e acima                              | Obesidade graus III e IV  | */

const readline = require('readline-sync')

function calculaImc() { 

const peso= readline.questionFloat('Qual o seu peso? (em KG)');
const altura = readline.questionFloat('Qual a sua altura? (em CM)');

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);

  if(imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
  }
  if(imc >= 18.5 && imc < 24.9){
    console.log('Situação: Peso normal');
  }
  if(imc >= 24.9 && imc < 34.9){
    console.log('Situação: Obesidade grau I');
  }
  if(imc >= 34.9 && imc < 39.9){
    console.log('Situação: Obesidade grau II');
  }
  else {
    console.log('Situação: Obesidade grau III e IV')
  }
}

calculaImc();

