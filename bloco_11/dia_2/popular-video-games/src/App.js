import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListaGames from './data.js';
import VideoGameList from './VideoGameList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <VideoGameList games={ListaGames} />
      </div>
    );
  }
}

export default App;
