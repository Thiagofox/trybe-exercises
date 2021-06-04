import React, { Component } from 'react'
import Pokemon from './Pokemon ';

class Pokedex extends Component {
  render() {
    const pokeList = this.props.pokemons
    return (
      <div className = "pokedex">
        {pokeList.map ((poke) => <Pokemon pokemon = {poke} key = {poke.id}  />)}
      </div>
    )
  }
}

export default Pokedex;