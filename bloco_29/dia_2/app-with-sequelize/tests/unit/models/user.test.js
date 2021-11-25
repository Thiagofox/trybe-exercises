const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../../models/user');

describe('O model de User', () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  describe('possui o nome "User"', () => {
    checkModelName(User)('User');
  });

  describe('possui as propriedades "fullName" e "email"', () => {
    ['fullName', 'email'].forEach(checkPropertyExists(user));
  });
});

// verificar https://app.betrybe.com/course/back-end/arquitetura-solid-e-orm/orm-interface-da-aplicacao-com-o-banco-de-dados/d0fc385e-b0ce-4b3d-8246-779d5dc13682/conteudos/846fb025-827d-4d36-993b-611e13c17510/testes/c5ee8a83-7af3-418a-8db2-2d4f9b5d7c4d?use_case=side_bar