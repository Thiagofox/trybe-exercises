import React, { Component } from 'react'
import Avo from './Avo';
import MyContext from './MyContext';

class Bisavo extends Component {
  constructor(props){
    super (props)
    this.state ={
      money: 100000,
    }
    this.handleSpendMoney = this.handleSpendMoney.bind(this)
  }

  // handleSpendMoney() {
  //   const { money } = this.state;
  //   this.setState ({
  //     money: money - 1000
  //   })
  // }

  handleSpendMoney(){
    this.setState((prevState) => ({ money: prevState.money - 1000 }))
  }

  render() {
    const contextValue = {
      money: this.state.money,
      spendMoney: this.handleSpendMoney,
    }
    return (
      <MyContext.Provider value={contextValue}>
      <div>
        <h1>Oi eu sou a Bisavó</h1>
        <Avo />
        {/* <Avo money={this.state.money} spendMoney={this.handleSpendMoney}/> */}
      </div>
      </MyContext.Provider>
      
    )
  }
}

export default Bisavo