// Exercicio 01 - Bonus - bloco 8 - Dia 1 -> High Order Functions

/*
Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
*/


const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
/*
1 - Crie uma função que retorna o dano do dragão.
  - O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
*/

const dragonDamage  = () => {
  const minDmg = 15;
  const dragStr = dragon.strength;
  const dragonDmg = Math.floor(Math.random() * (dragStr - minDmg) + minDmg)
  return dragonDmg;
}
console.log(dragonDamage());

// modo em uma linha 
// const dragonDamage  = () =>  Math.floor(Math.random() * (dragon.strength - 15) + 15)
  
// ===========================================================================================================================================>
/*
2 - Crie uma função que retorna o dano causado pelo warrior .
  - O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
*/

const warriorDamage = () => {
  const warStr = warrior.strength;
  const warWeapontDmg = warrior.weaponDmg;
  const maxDmg = warStr * warWeapontDmg;
  const warDamage = Math.floor(Math.random() * (maxDmg - warStr) + warStr);
  return warDamage;
}
console.log(warriorDamage());

// modo em uma linha 
// const warriorDamage = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);

// ===========================================================================================================================================>
/*
3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.

  - O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).

  - A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
*/

const mageDamage = (action) => {
  const minDmg = mage.intelligence;
  const maxDmg = mage.intelligence * 2;
  const mageDmg = Math.floor(Math.random() * (maxDmg - minDmg) + minDmg);
  return {dmg: mageDmg, mana: action()};
}

const calcMana = () => {
  let totalMana = mage.mana;
  if (totalMana < 15) {
    return `Não possui mana suficiente. Mana: ${totalMana}`;
  } else {
    totalMana = totalMana - 15;
    return totalMana;
  }
  
}
// console.log(calcMana());
console.log(mageDamage(calcMana));