import './App.css';
import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super()
    this.state = {
      clicksBtn: 0,
    }
    this.handle3 = this.handle3.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }
  
  handle3() {
    // A única coisa diferente é a desconstrução.
    // Apenas um método diferente de fazer a mesma coisa
    // do que foi feito nas funções anteriores.
    this.setState(({ clicksBtn }) => ({
      clicksBtn: clicksBtn + 1,
    }));
  }

  changeColor () {
    if(this.state.clicksBtn % 2 === 0) {
      return 'buttonTrue';
    }
    return 'buttonFalse';
  }
  
  render() {
    return (
      <div>
        <button className={this.changeColor} onClick={
          function() {
            this.handle3()
            this.changeColor()
          } 
        }>{this.state.clicksBtn}</button>
      </div>
    )
  }
}

export default App;