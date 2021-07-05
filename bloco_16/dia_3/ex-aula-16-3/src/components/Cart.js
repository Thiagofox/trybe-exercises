import React from 'react'
import { connect } from 'react-redux'

class Cart extends React.Component {
  render() {
    return (
      <div>
        Carrinho  de produtos
      </div>
    )
  }
}

export default connect()(Cart)