// Exercicio 01 - Parte 1 - bloco 8 - Dia 1 -> High Order Functions

/*
1 - Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
*/

const newEmployees = (action) => {
  const employees = {
    id1: action ('Pedro Guerra'),
    id2: action ('Luiza Drumond'),
    id3: action ('Carla Paiva')
  }
  return employees;
};

const pessoa = (name) => {
  const email = name.toLowerCase().split(' ').join('_');
  return {name: name, email: `${email}@trybe.com`};
}

console.log(newEmployees(pessoa));

/*
2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/


const verificaSorte = (numSorteio, action) => {
  const number = Math.floor(Math.random() * 5);
  return action(numSorteio, number);
}

const checkSorteio = (numSorteio, number) => {
  if (numSorteio === number) {
    return console.log(`Voce Ganhou`);
  } 
  console.log(`melhor sorte na proxima vez`);
}

verificaSorte(2, checkSorteio);


