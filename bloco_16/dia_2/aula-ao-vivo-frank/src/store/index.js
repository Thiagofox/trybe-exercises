import { createStore } from "redux";
import rootReducer from '../reducers';

// aqui importamos o rootReducer que é a função combineReducer do arquivo ../reducer/index.js
// e chamamos ele detro da createStore
const store = createStore(rootReducer) 

export default store