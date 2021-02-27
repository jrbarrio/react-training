import logo from './logo.svg';
import './App.css';
import { productos } from './data/productos'
import ListaProductos from './componentes/ListaProductos'


function App() {

  const categotiasRep = productos.map( productos => producto.category);
  const categorias = [ ...new Set(categoriasRep)];

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <ListaProductos 
              titulo="iPhone" 
              productos={ productos.filter(producto => (producto.category === 'iphone')) }>
            </ListaProductos>
            <ListaProductos 
              titulo="MacBook" 
              productos={ productos.filter(producto => (producto.category === 'macbook')) }>
            </ListaProductos>
          </div>
          <div className="col-4">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
