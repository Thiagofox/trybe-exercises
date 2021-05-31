import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex'
import './App.css'
function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      {/* cria uma prop 'pokemons' com o dados do arquivo data -> envia para pokedex esses dados  */}
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
