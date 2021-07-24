// src/App.js
import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import AddTodo from './components/addTodo';
import FilterTodos from './components/FilterTodo'
import TodoList from './components/TodoList';

const App = () => (
  <Provider store={store}>
    <AddTodo />
    <FilterTodos />
    <TodoList />
  </Provider>
);

export default App;