import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      pokemonsType: 'All'
    }
    this.getNextPKM = this.getNextPKM.bind(this)
    this.setFilter = this.setFilter.bind(this)
    this.getPKMTypes = this.getPKMTypes.bind(this)
    this.applyFilter = this.applyFilter.bind(this)
    this.createAllBtn= this.createAllBtn.bind(this)
  }

  getNextPKM(list) {
    const pokeSize = list;
    this.setState((state) => ({
      pokemonIndex: (state.pokemonIndex + 1) % pokeSize.length 
    }));
  }

  setFilter (event) {
    this.setState ({
      pokemonsType: event.target.className,
      pokemonIndex: 0,
    })
  }
  
  getPKMTypes () {
    const pokeArray = this.props.pokemons;
    return [...new Set(pokeArray.map((type) => type.type))];
  }

  applyFilter () {
    const result = this.getPKMTypes();
    console.log(this.state)
    return result.map((type) => <Button buttons={type} key={type} setFilter={this.setFilter}/>) 
  }

  createAllBtn (list) {
    const validDisable = list.length <= 1 ? true : false
    return (<button className="All" onClick={this.setFilter} disabled={validDisable}>All</button>)
  }

  render() {
    const list = this.props.pokemons.filter((poke) => {
      return this.state.pokemonsType === 'All' || poke.type === this.state.pokemonsType
    });

    return (
      <div className="pokedex">
        <Pokemon pokemon = {list[this.state.pokemonIndex]} /> 
        {this.createAllBtn(list)}
        <button onClick={()=> this.getNextPKM(list)}>Next Pokemon</button>
        
        {this.applyFilter()}
      </div>
    );
  }
}

export default Pokedex;