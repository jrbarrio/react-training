import './App.css';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import { Component } from 'react';

class App extends Component {

  state = {
    listaProductos: []
  };

  onTareaCreada = (nuevoProducto) => {
    // const arrProductos = [...this.state.listaProductos];
    // arrProductos.push(nuevoProducto);
    this.setState({
      listaProductos: [...this.state.listaProductos, nuevoProducto]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <Formulario tareaCreada={this.onTareaCreada} />
            </div>
            <div className="col-12 col-md-8">
              <Lista productos={this.state.listaProductos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
