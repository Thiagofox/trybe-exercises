const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', function(req, res) {
  res.status(200).json({message: 'pong'});
});

// http GET :3000/ping

app.post('/hello', function(req, res){
  const { name } = req.body;
  res.status(200).json({message: `hello ${name}!`});
});

// http POST :3000/hello name='thiago'     

app.post('/greetings', function(req, res) {
  const { name, age } = req.body;
  if(age < 17){
    res.status(401).json({ message: 'Unauthorized' });
  }
  res.status(200).json({message: `greetings ${name}`});
});

// http POST :3000/greetings name='thiago' age:=16
// http POST :3000/greetings name='thiago' age:=18

app.put("/users/:name/:age", function(req, res){
  const { name, age } = req.params;
  res.status(200)
    .json({message: `Seu nome é ${name} e você tem ${age} anos de idade!`});
});

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('Ouvindo na porta 3000!'));

