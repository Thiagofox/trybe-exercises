import React, { Component } from 'react'
import "./button.css";


class Button extends Component {
  render() {
    // recebe como props o tipo e a função set filter e ao clicar nesse botao chama essa função
    const type = this.props.buttons;
    const { setFilter } = this.props;
    return (
      <div>
        <button className={type} onClick={setFilter}>{type}</button>
      </div>
    )
  }
}

export default Button