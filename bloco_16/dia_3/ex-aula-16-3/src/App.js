import './App.css';
import Cart from './components/Cart'
import ListProducts from './components/ListProducts'

function App() {
  return (
    <div className="App">
      <ListProducts />
      <Cart />
    </div>
  );
}

export default App;