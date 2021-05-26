import React from 'react';
import './App.css';
import pokemons from './data.js'
import Pokedex from './Pokedex.js'
function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
