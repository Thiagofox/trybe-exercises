import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext';

function TodoList() { 
  const { todos } = useContext(TodoContext);
  console.log(todos)

  return (
        <ul>
          {todos.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
  );
}

export default TodoList;