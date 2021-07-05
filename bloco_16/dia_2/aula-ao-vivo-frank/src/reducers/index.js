import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

// neste caso so temos 1 reducer mas se houvessem mais basta imoportar eles acima e colocar eles abaixo dentro da função combineReducers 


export default combineReducers({ 
  todoReducer,

})