/* Bônus

Exercício 1

Adicione autenticação a todos os endpoints.

O token deve ser enviado através do header Authorization .

O token deve ter exatamente 16 caracteres.

Caso o token seja inválido ou inexistente, a resposta deve possuir o status 401 - Unauthorized e o JSON { message: 'Token inválido!' } .

Resolução */

// authMiddleware.js

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }

  return next();
}

// index.js

const express = require('express');
const authMiddleware = require('./authMiddleware');
const app = express();

app.use(express.json());
app.use(authMiddleware);

/* ... */

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));


/* Exercício 2

Crie uma rota POST /signup

A rota deve receber, no body da requisição, os campos email , password , firstName e phone .
Caso algum dos campos não esteja preenchido, a response deve possuir status 401 - Unauthorized e o JSON { message: 'missing fields' } .

Caso todos os parâmetros estejam presentes, a rota deve gerar um token aleatório válido, e a resposta deve conter o status 200 - OK e o JSON { token: '<token-aleatorio>' } .

Para gerar o token você pode utilizar a função randomBytes , do módulo crypto do node, dessa forma: */


const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;

index.js

/* ... */
const crypto = require('crypto');
/* ... */

app.post('/signup', (req, res) => {
  const { email, passowrd, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  const token = crypto.randomBytes(8).toString('hex');

  res.status(200).json({ token });
})

/* ... */