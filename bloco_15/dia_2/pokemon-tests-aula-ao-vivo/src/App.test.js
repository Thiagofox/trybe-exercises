import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Testes relacionados ao componente App', () => {
  test('Verifia se existe um texto na tela com o valor Pokémon Cards', () => {
    render(<App />);
    const title = screen.getByText(/Pokémon Cards/i);
    expect(title).toBeInTheDocument();
  });

  test('Verifica se existe um input de pokemon na tela', () => {
    const { getByTestId } = render(<App />);
    const inputTextPokemon = getByTestId('input-pokemon')
    expect(inputTextPokemon).toBeInTheDocument()
  })

  test('Verifica se existe um botão de pesquisar na tela', () => {
    const { getByRole } = render(<App />)
    const botaoPesquisar = getByRole('button')
    expect(botaoPesquisar).toBeInTheDocument()
  })

  test('Verificar se o input recebe o valor pikachu via fireEvent', () => {
    render(<App />)
    const inputTextPokemon = screen.getByTestId('input-pokemon')
    fireEvent.change(inputTextPokemon, { target: { value: 'Pikachu' } })
    expect(inputTextPokemon).toHaveValue('Pikachu')
  })

  test('Verificar se o input recebe o valor pikachu via userEvent', () => {
    render(<App />)
    const inputTextPokemon = screen.getByTestId('input-pokemon')
    userEvent.type(inputTextPokemon, 'Pikachu')
    expect(inputTextPokemon).toHaveValue('Pikachu')
  })

  test('Simula clique no botão de pesquisar por pokemon', () => {
    const data = {
      cards: [
        {
          id: 'xyp-XY174',
          name: 'Pikachu-EX',
          types: ['Lightning'],
        },
      ],
    };

    global.fetch = jest.fn().mockImplementation(
      function () {
        return Promise.resolve({
          json: () => Promise.resolve(data)
        })
      }
    )

    render(<App />)
    const inputTextPokemon = screen.getByTestId('input-pokemon')
    userEvent.type(inputTextPokemon, 'pikachu')
    const botaoPesquisar = screen.getByRole('button')
    fireEvent.click(botaoPesquisar)

    expect(global.fetch).toBeCalled()
    expect(global.fetch).toBeCalledTimes(1)
    expect(global.fetch).toBeCalledWith('https://api.pokemontcg.io/v1/cards?name=pikachu')
  })
})
