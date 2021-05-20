const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (animal) {
        return resolve(animal);
      };
      const messageError = 'Nenhum animal com esse nome!';
      return reject(messageError);
    }, 100);
  })
);

function getAnimal(name) {
  return findAnimalByName(name).then(animal => animal);
}

describe ('quando existe o animal com o nome que foi passado', () => {
  it ('testa se o nome passado existe e retorna o nome' , () => {
    expect.assertions(1);
    return getAnimal('Preguiça').then(animal => {
      expect(animal).toEqual({ name: 'Preguiça', age: 5, type: 'Cat' });
    });
  });
})

describe('Quando não existe o animal com o nome procurado', () => {
  test('Retorna um erro', () => {
    expect.assertions(1);
    return getAnimal('Bob').catch(error =>
      expect(error).toEqual('Nenhum animal com esse nome!')
    );
  });
});