import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Contato from './Contato'
import ErrorPage from './ErrorPage';

export const Home = () => <h1>Bem vindo ao meu site</h1>
export const Sobre = () => <h1>Está é a págia sobre</h1>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/contato" component={Contato} />
          <Route component={ErrorPage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;