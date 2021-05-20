const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

it (`testa se a função upercase passando 'test' traz o retorno de 'TEST'`, (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST')
    done();
  })
});
