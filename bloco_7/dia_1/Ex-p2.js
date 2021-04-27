// Exercicio bloco 7 - Dia 1 - Parte 2
/*

Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .

1 - Crie uma função que receba um número e retorne seu fatorial.

- Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

- Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator.
*/

// function fatorial (numero) {
//   if (numero > 0) {
//     for (let index = numero; index > 0; index -= 1) {
//       let resultado = index * (index - 1);
//     }
//   }
// }

// modo tradicional 
function fatorial (numero) {
  if (numero > 0) {
    let resultado = numero;
    for (let index = 1; index < numero; index += 1) {
      resultado = resultado * index;
    }
    console.log(`Este é o resultado do fatorial de ${numero} = ${resultado}`);
  } else {
    console.log(`O numero deve ser maior que 0`);
  }
  }
fatorial(-4);

// com arraow functions
const fatorial = numero => {
  if (numero > 0) {
    let resultado = numero;
    for (let index = 1; index < numero; index += 1) {
      resultado = resultado * index;
    }
    console.log(`Este é o resultado do fatorial de ${numero} = ${resultado}`);
  } else {
    console.log(`O numero deve ser maior que 0`);
  }
}
fatorial(6);

// ainda nao entendo como funciona essa função =/

const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(5))

// =======================================================================================================

// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.

let longestWord = "Antônio foi no banheiro e não sabemos o que pracaralhooo aconteceu"

const biggestWord = (longestWord) => {
  let array = longestWord.split(' ');
  let word = '';
  let wlenght = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > wlenght) {
      wlenght = array[index].length;
      word = array[index];    
    }
  }
  console.log(`A maior palavra na frase é ${word}`);
}
biggestWord(longestWord);

// =======================================================================================================

/*3 - Crie uma página que contenha:

- Um botão ao qual será associado um event listener ;

- Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;

- Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
*/

let click = 0;
let textToDisplay = document.getElementById('text');
const clickButton = document.getElementById('button');
clickButton.addEventListener('click', () => textToDisplay.innerHTML = click += 1)
// codigo funcionando no arquivo index.html na pasta do exercício

// =======================================================================================================

/*
4 - Crie um código JavaScript com a seguinte especificação:

- Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .

Exemplo:

String determinada: "Tryber x aqui!"

Parâmetro: "Bebeto"

Retorno: "Tryber Bebeto aqui!"

Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
*/

// const string = 'Javascript HTML CSS x Funções';

const vetor = ['JS', 'HTML', 'CSS', 'JQUERY', 'FLEXBOX'];

// forma com tempalte literals que o rafael fez
const getX = (newWord) => 'Tryber x aqui!'.replace('x', newWord);

// forma que eu fiz 
// const getX = (newWord) => { 
//   const string = 'Tryber x aqui!';
//   let search = string.split(' ');
//   let array = [];
//   for (let index = 0; index < search.length; index += 1) {
//     if (search[index] === 'x') {
//       search[index] = newWord;
//     }
//     array.push(search[index]);
//   }
//   let resultado = array.join(' ');
//   return resultado;
// }
// console.log(getX('Bebeto'));

// segunda função com o tempalte literals

const sortArray = (result) => `${result} ${vetor.sort()}`
console.log(`O array ordenado fico da seguinte maneira ${sortArray(getX('Bebeto'))}`)

// função tradicional

// function sortArray (result) {
//   return `${result} ${vetor.sort()}`
// }
// console.log(sortArray(getX('Bebeto')));

