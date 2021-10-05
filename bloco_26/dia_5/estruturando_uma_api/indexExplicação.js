const express =  require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function(_req, res) {
  recipes.sort(function (a, b) {
    if(a.name > b.name){
      return 1;
    }
    if (a.name < b.name){
      return -1;
    }
    return 0;
  });
  res.json(recipes);
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, newPrice } = req.query;
  const filteredRecipes = recipes.filter((item) => item.name.includes(name) && item.price < parseInt(maxPrice) && item.price >= parseInt(newPrice));
  res.status(200).json(filteredRecipes);
});

// A estrutura básica de uma requisição utilizando o fetch pode ser escrita da seguinte forma:

// fetch('http://localhost:3001/recipes')
//     .then(resp => resp.json())

// Para dar mais visibilidade, imagine um componente React que precisa exibir essa lista. Ele ficaria mais ou menos assim:

/* 
class receitasList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then((recipes) => this.setState(
        { 
          recipes,
          isLoading: false,
        },
      ));
  }

  render() {
    const { recipes, isLoading } = this.state;
    
    return (
      <div>
        <div>
          {isLoading && <Loading />}
          <div className='card-group'>
            {recipes.map((recipe) => (
              <div key={recipe.id}>
                <h1>{recipe.name}</h1>
                <span>Preço: {recipe.price}</span>
                <span>Tempo de preparo: {recipe.waitTime}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
} 
*/


// ==========================================================================================================================


app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

/* 
Nos campos id e preco usamos := enquanto em nome colocamos apensas = . Fazemos isso, pois o operador = envia os dados como string, enquanto com := o dado é enviado como número.

⚠️ Observação: Como estamos trabalhando com a lista de receitas através de uma array, sempre que nossa aplicação é reiniciada, a array volta ao formato original, com os 3 objetos que definimos direto no código. Portanto, caso as receitas que você cadastrou sumam repentinamente da listagem, provavelmente foi por essa causa, os dados estão apenas armazenados em memória.

Vamos voltar para nosso código para entender a implementação. 
*/

// ==========================================================================================================================


app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({ message: 'Valid Token!'});
});

// Perceba, que repetimos a rota /recipes , só que agora usando o método .post . No Express, é possível ter rotas com o mesmo caminho desde que o método (ou verbo) HTTP utilizado seja diferente, na outra rota definimos o que acontece para o método GET . Por falar nisso, fica a pergunta, como vamos conseguir fazer requisições já que por padrão as requisições que fazemos ou no navegador ou no fetch api são do tipo GET ?

// Vamos começar pelo fetch-api , usando o código abaixo.

// fetch(`http://localhost:3001/recipes/`, {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     id: 4,
//     title: 'Macarrão com Frango',
//     price: 30
//   })
// });

// Diferente do que fizemos para fazer uma requisição do tipo GET , dessa vez passamos um segundo parâmetro que é um objeto formado pelos atributos method , headers , body . Vamos entender o que é cada um.

// - method : Método HTTP utilizado, como vimos no primeiro bloco temos 4 que são mais utilizados (GET, POST, PUT e DELETE).

// - headers : Define algumas informações sobre a requisição como o atributo Accept que diz qual o tipo de dado esperado como resposta dessa requisição e o Content-Type que sinaliza que no corpo da requisição está sendo enviado um JSON.

// - body : É o corpo da requisição. Como no HTTP só é possível trafegar texto, é necessário transformar o objeto JavaScript que quermos enviar para uma string JSON. Por isso que do lado do nosso back-end precisamos utilizar o bodyParser para transformar as informações que foram trafegadas como string JSON, de volta para um objeto JavaScript.

// Não é possível fazer requisições POST diretamente pelo navegador como fizemos para requisição para rota GET /recipes . Por isso devemos utilizar aplicações como o Insomnia ou Postman para fazer requisições de qualquer tipo diferente do GET. Vamos usar o HTTPie para executar nossa requisição.

/* 
http POST :3001/recipes id:=4 name='Macarrão com Frango' price:=30 // execute apenas essa linha!
> HTTP/1.1 201 Created
> Connection: keep-alive
> Content-Length: 32
> Content-Type: application/json; charset=utf-8
> Date: Sat, 21 Aug 2021 19:26:46 GMT
> ETag: W/"20-bnfMbzwQ0XaOf5RuS+0mkUwjAeU"
> Keep-Alive: timeout=5
> X-Powered-By: Express
> 
> {
>     "message": "Recipe created successfully!"
> } 
*/
// para rodar:

// http :3001/validateToken Authorization:abc # vai devolver token inválido
// http :3001/validateToken Authorization:S6xEzQUTypw4aj5A # vai devolver token válido

// ==========================================================================================================================


app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
}); 


/* 
Observe que definimos uma rota que recebe o id como parâmetro de rota, e os campos nome e preço através do body da requisição. É um padrão sempre mandar o id como parâmetro de rota e os atributos que vão ser alterados, no body, pois é uma boa prática do RESTful, conteúdo que vamos ver mais a frente. 

Depois apenas usamos o método find para encontrar a receita correspondente ao id, e atualizamos os atributos para os valores recebidos. Por fim, devolvemos uma resposta HTTP com o status 204, que serve para indicar que algo foi atualizado e utilizamos o método .end() que indica que a resposta vai ser retornada sem retornar nenhuma informação

Vamos fazer essa requisição usando o HTTPie.

http PUT :3001 /recipes/2 name='Macarrão ao alho e óleo' price:=40 # execute apenas essa linha! 
*/

// ==========================================================================================================================

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});



/* 
Note que novamente utilizamos o id como parâmetro de rota. Essa é uma convenção que como vimos, serve para sempre que precisamos trabalhar com id seja para pesquisar, editar e remover objetos através da nossa API. É possível fazer a mesma coisa enviando o id como query string ou no body da requisição, mas usar parâmetro de rota acaba sendo a forma mais simples de mandar esse tipo de dado entre todas as opções disponíveis.

Vamos fazer uma requisição usando o HTTPie novamente.

http DELETE :3001 /recipes/3 # execute apenas essa linha!

> HTTP/1.1 204 No Content
> Connection: keep-alive
> Date: Fri, 20 Aug 2021 22:25:44 GMT
> ETag: W/"23-nD7qnlOhswfi0qOrye68khRdynU"
> Keep-Alive: timeout=5
> X-Powered-By: Express
*/
/* 
Novamente por termos usado o status HTTP 204, a resposta da nossa requisição vem sem trazer um conteúdo. Tudo bem, já que o objetivo dessa rota é apenas excluir um registro da nossa array de receitas. Teste fazer a requisição para listar os receitas e você vai conferir que a receita com id 3 realmente foi removido.

No front-end, para fazer requisições do tipo PUT e DELETE através do fetch api podemos utilizar os exemplos de código abaixo: 
*/

// Requisição do tipo PUT
/* fetch(`http://localhost:3001/recipes/2`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Macarrão ao alho e óleo',
    price: 40
  })
});

// Requisição do tipo DELETE
fetch(`http://localhost:3001/recipes/4`, {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
}); */

// ==========================================================================================================================


app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001);

// http GET :3001/xablau

/* 
O método app.all serve para mapear uma rota que pode ser de qualquer verbo HTTP e o valor * é um wildcard , ou seja um expressão coringa que indica que indepedente da rota que chegar aqui ele vai capturar e executar a callback que por sua vez retorna uma resposta com status 404 .

⚠️ Cuidado: Essa definição de rota generalista com app.all('*') deve ser sempre a última definição de rota da nossa API. Caso o contrário algumas requisições podem cair antes neste callback e não executar o callback para a rota específica. Para exemplificar vamos definir um callback para responder a rota /xablau .
*/

/* 
O método app.all serve para mapear uma rota que pode ser de qualquer verbo HTTP e o valor * é um wildcard , ou seja um expressão coringa que indica que indepedente da rota que chegar aqui ele vai capturar e executar a callback que por sua vez retorna uma resposta com status 404 .

⚠️ Cuidado: Essa definição de rota generalista com app.all('*') deve ser sempre a última definição de rota da nossa API. Caso o contrário algumas requisições podem cair antes neste callback e não executar o callback para a rota específica. Para exemplificar vamos definir um callback para responder a rota /xablau . */

//...
/* app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

// nunca vai chegar nessa rota!
app.get('/xablau', function (req, res) {
    return res.status(404).json({ message: `Xablau!`});
});

app.listen(3001); */

// Se você fizer a requisição com o código acima vai ver que o Express vai continuar a trazer a mesma resposta "Rota '/xablau' não existe!" . Agora inverta as duas definições de rotas de lugar e observe que a resposta retornada passa a ser a correta.

//...

// agora vai chegar nessa rota!

/* app.get('/xablau', function (req, res) {
    return res.status(404).json({ message: `Xablau!`});
});

app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001); */

// http :3001/xablau
// {
//    "message": "Rota '/rota' não existe!"
// }


