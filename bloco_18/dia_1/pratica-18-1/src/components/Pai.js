import React, { Component } from 'react'
import Filha from './Filha'

class Pai extends Component {
  render() {
    return (
      <div>
        <h3>Oi eu sou o Pai</h3>
        <Filha />
        {/* <Filha money={this.props.money} spendMoney={this.props.spendMoney}/> */}
      </div>
    )
  }
}


export default Pai