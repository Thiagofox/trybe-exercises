import { SAVE_DATA } from "../actions";

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}

function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_DATA:
      return {
        ...action.data, submitted: true,
      }
    default:
      return state;
  }
}

export default appReducer;