import React from 'react';

const Task = (value) => {
  return (
    <li key = {value}>{value}</li>
  );
}

const arrayTask = ['Acordar', 'Pegar Agua', 'Dentes', 'Estudar'];

class Teste extends React.Component {
  render() {
    return (
      <div>
        <h1>Lista de tarefas</h1>
        <ul>{ arrayTask.map((tarefa) => Task(tarefa)) }</ul>
      </div>
      
    );
  }
}

export default Teste;