// Exercicio fixação 01 - bloco 8 - Dia 1 -> High Order Functions


const repeat = (number, action) => {
  for (let count = 0; count < number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);

// ===========================================================================>

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

// ===========================================================================>

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

// ===========================================================================>

const doingThings = (action) => action();

const acordando = () => console.log(`Acordando!`);
const cafe = () => console.log(`Tomando Café!`);
const dormir = () => console.log(`Indo dormir!`)

doingThings(acordando);
doingThings(cafe);
doingThings(dormir);

// ===========================================================================>


