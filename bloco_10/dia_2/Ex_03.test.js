const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('quando o id do uduário existe', ()=> {
  it('testa se o id passado retorna o usuário', async () => {
    expect.assertions(1);
    const data = await getUserName(5);
    expect(data).toEqual('Paul')
  });
});

describe('quando o id do usuário não existe', () => {
  it('testa se ao passar numero de id nao cadastrado gera um erro', async() => {
    expect.assertions(1);
    try {
      await getUserName(7);
    }
    catch(error) {
      expect(error).toEqual({ error: 'User with 7 not found.' });
    }
  });
});