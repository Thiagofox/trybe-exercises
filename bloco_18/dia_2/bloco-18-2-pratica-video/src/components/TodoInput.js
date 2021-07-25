import React, { useContext, useState }from 'react'
import TodoContext from '../context/TodoContext';

function TodoInput() {
  const { addTodo } = useContext(TodoContext)
  // const [state, setNewState] = useState('');
  const [newTodo, setNewTodo] = useState('');

  const handleChange = ({ target }) => {
    setNewTodo(target.value);
  }

  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo('');
  }

  return (
    <div>
      <section>
        <label>
          Insira uma tarefa:
          <input 
            value={newTodo}
            onChange={handleChange}
            type="text"
            name="newTodo"
            id="newTodo"
          />
        </label>
        <button 
          type="button"
          onClick={handleClick}
        >
          Adicionar
        </button>
      </section>
    </div>
  )
}

export default TodoInput