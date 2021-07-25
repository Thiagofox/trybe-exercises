import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import TodoProvider from './context/TodoProvider'

function App() {
    return (
    <main>
      <TodoProvider>
        <TodoInput />
        <TodoList />
      </TodoProvider>
    </main>
  );
}

export default App;
