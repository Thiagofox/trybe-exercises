import React, { Component } from 'react'
import Pai from './Pai';
class Avo extends Component {
  render() {
    return (
      <div>
        <h2>Oi eu sou a Avó</h2>
        <Pai />
        {/* <Pai money={this.props.money} spendMoney={this.props.spendMoney}/> */}
      </div>
    )
  }
}

export default Avo;