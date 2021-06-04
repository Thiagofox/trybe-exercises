import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };

    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    
  }

  handleButtonOne() {
    this.setState((prevState) => ({
      clicksBtnOne: prevState.clicksBtnOne + 1,
    }));
  }
  
  handleButtonTwo() {
    this.setState((prevState) => ({
      clicksBtnTwo: prevState.clicksBtnTwo + 1,
    }));
  }
  
  handleButtonThree() {
    // A única coisa diferente é a desconstrução.
    // Apenas um método diferente de fazer a mesma coisa
    // do que foi feito nas funções anteriores.
    this.setState(({ clicksBtnThree }) => ({
      clicksBtnThree: clicksBtnThree + 1,
    }));
  }
  
  render() {
    return (
      <div>
        <button onClick={ this.handleButtonOne }>Botão 1 | Count = {this.state.clicksBtnOne}</button>
        <button onClick={ this.handleButtonTwo }>Botão 2 | Count = {this.state.clicksBtnTwo}</button>
        <button onClick={ this.handleButtonThree }>Botão 3 | Count = {this.state.clicksBtnThree}</button>
      </div>
    );
  }
}

export default App;