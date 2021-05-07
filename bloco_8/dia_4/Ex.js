const animais = ['gato', 'cachorro', 'cavalo', 'canguru', 'piriquito', 'pereca'];

function getAnimalsWithLetter (letter) {
  const reuslt = animais.reduce((acc, curr) => {
    if (curr[0] === letter) {
       acc.push(curr);
    };
    return acc;
    }, []);
    return reuslt;
} 

function getAnimalsWithFilter (letter) {
  return animais.filter((animal) => animal[0] === letter)
}
console.log(getAnimalsWithFilter('p'));
console.log(getAnimalsWithLetter('p'));

function withoutG () {
  return animais.find((value) => value.startsWith('j'));
}
console.log(withoutG());


