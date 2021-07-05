import { Provider } from 'react-redux';
import Title from './components/Title';
import List from './components/List';
import Todo from './components/Todo';
import './App.css';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Title />
        <Todo />
        <List />
      </Provider>
    </div>
  );
}

export default App;
