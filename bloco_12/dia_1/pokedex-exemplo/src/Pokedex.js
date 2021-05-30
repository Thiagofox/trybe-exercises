import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './pokedex.css';
// recebe o import do componente Pokemon e do componente Button

class Pokedex extends React.Component {
  constructor(props) {  
    super(props);

    // seta o construtor + super para manipular o estado de pokedex -> não entendi o por que de passar props como paramentro 

    this.state = {
      pokemonIndex: 0,
      filteredType: 'all',
    };

    // cria dois estados acredito ser a posição do index so pokedex e o tipo filtrado como all
  }

  filterPokemons(filteredType) {
    this.setState({ filteredType, pokemonIndex: 0 });
  }

  // acredito que essa função recebe como parametro o tipo do pokemon a ser filtrado -> faz um desconstruct do estate pegando as duas propiedades e seta o state de pokemonIndex para 0

  nextPokemon(numberOfPokemons) {
    this.setState(state => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
    }));
  }

  // essa função recebe como parametro o numberOfPokemons -> parece adicionar mais um a state de pokemons index com o intuito de procurar o proximo pokemon na lista não entendo o porque do % numberOfPokemons

  fetchFilteredPokemons() {
    const { pokemons } = this.props;
    const { filteredType } = this.state;

    return pokemons.filter(pokemon => {
      if (filteredType === 'all'){
        return true;
      } 
      return pokemon.type === filteredType;
    });
  }



  fetchPokemonTypes() {
    const { pokemons } = this.props;

    return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))];
  }

  render() {
    const filteredPokemons = this.fetchFilteredPokemons();
    const pokemonTypes = this.fetchPokemonTypes();
    const pokemon = filteredPokemons[this.state.pokemonIndex];

    return (
      <div className="pokedex">
        <Pokemon pokemon={ pokemon } />
        <div className="pokedex-buttons-panel">
          <Button
            onClick={() => this.filterPokemons('all')}
            className="filter-button"
          >
            All
          </Button>
          {pokemonTypes.map(type => (
            <Button
              key={ type }
              onClick={() => this.filterPokemons(type)}
              className="filter-button"
            >
              { type }
            </Button>
          ))}
        </div>
        <Button
          className="pokedex-button"
          onClick={() => this.nextPokemon(filteredPokemons.length)}
          disabled={ filteredPokemons.length <= 1 }
        >
          Próximo pokémon
        </Button>
      </div>
    );
  }
}

export default Pokedex;