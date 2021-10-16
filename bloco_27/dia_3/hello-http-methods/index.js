// index.js

// const axios = require('axios').default;

// Armazenamos o token numa variável.
// Num ambiente real, esse valor viria do Local Storage, ou de uma variável de ambiente
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

// Criamos um novo objeto de Headers
const headers = { Authorization: API_TOKEN };

// Continuamos a fazer uma requisição do tipo `GET`, mas passando o token no header
axios.get('https://postman-echo.com/get?param1=teste', { headers })
  .then((response) => {

    // Caso esteja tudo OK, retornamos os dados
    // As informações são retornas dentro da propriedade "data" quando usamos axios
    return response.data;
  })
  .then((data) => {
    // Por fim, escrevemos o body no console
    console.log(data);
  })
  .catch((errorOrResponse) => {
    // Em caso de falha simples (a request completou com um status diferente de 2xx)
    // simplesmente logamos o status no console
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    // Caso tenha acontecido um erro de rede (não foi possível completar a request)
    // logamos o erro todo
    console.error(errorOrResponse);
  });

  {
    args: { param1: 'teste' },
    headers: {
      'x-forwarded-proto': 'https',
      'x-forwarded-port': '443',
      host: 'postman-echo.com',
      'x-amzn-trace-id': 'Root=1-613a6e45-5e5198396aaf81b13e7a1f04',
      accept: 'application/json, text/plain, */*',
      authorization: '2d635ea9b637ea0f27d58985cc161d64',
      'user-agent': 'axios/0.21.4'
    },
    url: 'https://postman-echo.com/get?param1=teste'
  }


  const axios = require('axios').default;

// Armazenamos o token numa variável.
// Num ambiente real, esse valor viria do Local Storage, ou de uma variável de ambiente
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

// Criamos um novo objeto de Headers
const headers = { Authorization: API_TOKEN };

// Agora, iremos fazer uma requisição do tipo `POST`
axios.post('https://postman-echo.com/post?param1=teste')
  .then((response) => {

    // Caso esteja tudo OK, retornamos os dados
    // As informações são retornas dentro da propriedade "data" quando usamos axios
    return response.data;
  })
  .then((data) => {
    // Por fim, escrevemos o body no console
    console.log(data);
  })
  .catch((errorOrResponse) => {
    // Em caso de falha simples (a request completou com um status diferente de 2xx)
    // simplesmente logamos o status no console
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    // Caso tenha acontecido um erro de rede (não foi possível completar a request)
    // logamos o erro todo
    console.error(errorOrResponse);
  });

// Basta substituir, na URL, o endpoint da API que queremos chamar, e trocar o método GET pelo método POST .
// Executando o código agora, temos o seguinte resultado:

{
  args: { param1: 'teste' },
  data: '',
  files: {},
  form: {},
  headers: {
    'x-forwarded-proto': 'https',
    'x-forwarded-port': '443',
    host: 'postman-echo.com',
    'x-amzn-trace-id': 'Root=1-613a79ee-0b0915602108a393443446b6',
    'content-length': '0',
    accept: 'application/json, text/plain, */*',
    'content-type': 'application/x-www-form-urlencoded',
    'user-agent': 'axios/0.21.4'
  },
  json: null,
  url: 'https://postman-echo.com/post?param1=teste'
}


// Enviando um Body
// Você vai ver agora como enviar informações no corpo da requisição. Para isso, vamos criar um objeto chamado body com algumas propriedades, para assim, conseguirmos enviar alguma informação. Mãos ~à massa~ ao código! 💻

// const axios = require('axios').default;

// Armazenamos o token numa variável.
// Num ambiente real, esse valor viria do Local Storage, ou de uma variável de ambiente
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

// Criamos um novo objeto de Headers
const headers = { Authorization: API_TOKEN };

const body = {
  name: 'Tryber',
  email: 'tryber@betrybe.com',
  password: 'Tr1b3r',
};

// Agora, iremos fazer uma requisição do tipo `POST` passando o body
axios.post('https://postman-echo.com/post?param1=teste', body, { headers })
  .then((response) => {

    // Caso esteja tudo OK, retornamos os dados
    // As informações são retornas dentro da propriedade "data" quando usamos axios
    return response.data;
  })
  .then((data) => {
    // Por fim, escrevemos o body no console
    console.log(data);
  })
  .catch((errorOrResponse) => {
    // Em caso de falha simples (a request completou com um status diferente de 2xx)
    // simplesmente logamos o status no console
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    // Caso tenha acontecido um erro de rede (não foi possível completar a request)
    // logamos o erro todo
    console.error(errorOrResponse);
  });
// Agora, se executarmos o código, o resultado é o seguinte:

{
  args: { param1: 'teste' },
  data: { name: 'Tryber', email: 'tryber@betrybe.com', password: 'Tr1b3r' },
  files: {},
  form: {},
  headers: {
    'x-forwarded-proto': 'https',
    'x-forwarded-port': '443',
    host: 'postman-echo.com',
    'x-amzn-trace-id': 'Root=1-613a7e60-34e10ba802dc0500153955b4',
    'content-length': '66',
    accept: 'application/json, text/plain, */*',
    'content-type': 'application/json',
    authorization: '2d635ea9b637ea0f27d58985cc161d64',
    'user-agent': 'axios/0.21.4'
  },
  json: { name: 'Tryber', email: 'tryber@betrybe.com', password: 'Tr1b3r' },
  url: 'https://postman-echo.com/post?param1=teste'
}
// Dessa vez, a API do Postman nos envia de volta um objeto na propriedade data , e o mesmo objeto na propriedade json , o que quer dizer que o corpo da mensagem foi lido e interpretado com sucesso! 🥳
// Para utilizar outros verbos HTTP, basta alterar para o método desejado, e pronto!