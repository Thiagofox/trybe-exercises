const express =  require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function(_req, res) {
  res.json(recipes);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porte 3001');
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