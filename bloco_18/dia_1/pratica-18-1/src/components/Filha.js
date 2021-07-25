import React, { Component } from 'react'
import MyContext from './MyContext';

class Filha extends Component {
  render() {
    return (
      <div>
        <h4>Oi eu sou a Filha</h4>
        
        <MyContext.Consumer>
          {({ money, spendMoney }) => (
            <div>
            {console.log(money)}
            {console.log(spendMoney)}
            <p>{`Eu tenho ${money} para gastar`}</p>
            <button type="button" onClick={spendMoney}> Pedir um iFood</button>
          </div> 
          )}
          {/* {
            value => (
              <div>
                {console.log(value)}
                <p>{`Eu tenho ${value.money} para gastar`}</p>
                <button type="button" onClick={value.spendMoney}> Pedir um iFood</button>
              </div> 
            )
          }      */}
        </MyContext.Consumer>
        
        {/* <p>{`Eu tenho ${this.props.money} para gastar`}</p>
        <button type="button" onClick={this.props.spendMoney}> Pedir um iFood</button> */}
      </div>
    )
  }
}

export default Filha;