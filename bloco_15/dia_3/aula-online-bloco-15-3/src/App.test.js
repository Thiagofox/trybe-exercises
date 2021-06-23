import { fireEvent, getByText, render, screen } from '@testing-library/react';
import App from './App';
import Contato from './Contato'
import renderWithRouter from './renderWithRouter'

it('Verifica se o componente app foi chamado na home', () => {
  renderWithRouter(<App />);
  const titulo = screen.getByText(/Bem vindo ao meu site/);
  expect(titulo).toBeInTheDocument();
});

it('Deve renderizar o componente Contato', () => {
  const { getByText } = render(<Contato />)
  const title = getByText(/Está é a página de contato/)
  expect(title).toBeInTheDocument()
})

it('Verificar se entra na página sobre e exibe o titulo', () => {
  const { getByText, history } = renderWithRouter(<App />);
  const linkSobre = getByText(/Sobre/)
  fireEvent.click(linkSobre)

  const url = history.location.pathname
  expect(url).toBe('/sobre')

  const titlePage = getByText(/Está é a págia sobre/)
  expect(titlePage).toBeInTheDocument()
})

it('Deve renderizar a ErrorPage caso seja uma rota não existente', () => {
  const { getByText, history, container } = renderWithRouter(<App />);
  const rotaErrada = '/xablau'
  history.push(rotaErrada)

  // const erroPage = getByText(/Página não encontrada/)
  expect(container.innerHTML).toMatch(/Página não encontrada/)
})
