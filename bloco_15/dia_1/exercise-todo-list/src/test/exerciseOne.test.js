import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    const { getByText } = render(<App />);
    const buttonAdd = getByText('Adicionar');
    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd.type).toBe('button');
  });

  test('Verifica se ao ser clicado é adicionado o que o usuário digitou', () => {
    const { getByLabelText, queryByText } = render(<App />);

    const inputTask = getByLabelText('Tarefa:');
    const buttonAdd = queryByText('Adicionar');
    fireEvent.change(inputTask, { target: { value: 'Beber agua!' } });
    expect(queryByText('Beber agua!')).not.toBeInTheDocument();
    fireEvent.click(buttonAdd);
    expect(queryByText('Beber agua!')).toBeInTheDocument();
  });
});