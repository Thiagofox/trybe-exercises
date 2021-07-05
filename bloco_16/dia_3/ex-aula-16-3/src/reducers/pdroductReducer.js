
const INITIAL_STATE = {
  products: [],
  totalCart: 0,
  cartProducts: []
}

function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      //execute o que está aqui se a action.type = ADD_PRODUCT
      break;
    case 'REMOVE_PRODUCT':
      //execute o que está aqui se a action.type = REMOVE_PRODUCT
      break;
    case 'CLEAR_CART':
      //execute o que está aqui se a action.type = CLEAR_CART
      break;
    default:
      return state
      break;
  }

}

export default productReducer