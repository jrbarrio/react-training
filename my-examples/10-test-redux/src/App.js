import './App.css';
import Contador from './components/Contador';
import ListaProductos from './components/ListaProductos';

function App() {
  return (
    <div className="App">
      <ListaProductos></ListaProductos>
      <Contador></Contador>
    </div>
  );
}

export default App;
