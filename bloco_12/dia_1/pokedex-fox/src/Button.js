import React, { Component } from 'react'
import "./button.css";


class Button extends Component {
  render() {
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