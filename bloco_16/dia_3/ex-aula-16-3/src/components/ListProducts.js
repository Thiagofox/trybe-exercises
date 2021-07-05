import React from 'react'
import { connect } from 'react-redux'

class ListProducts extends React.Component {
  render() {
    return (
      <div>
        Lista de produtos
      </div>
    )
  }
}

export default connect()(ListProducts)