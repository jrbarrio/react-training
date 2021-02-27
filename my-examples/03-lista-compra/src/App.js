import logo from './logo.svg';
import './App.css';
import Formulario from "./componentes/Formulario";
import Lista from "./componentes/Lista";
import { Component } from 'react';

class App extends Component{

  state = {
    listaProductos: []
  }

  handleTareaCreada = (nuevoProducto) => {
    console.log(nuevoProducto)

    const arrProductos = [ ...this.state.listaProductos]
    arrProductos.push(nuevoProducto);
    this.setState({ listaProductos: arrProductos });

    // this.setState({ listaProductos: [ ...this.state.listaProductos, nuevoProducto ] });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <Formulario tareaCreada={ handleTareaCreada }></Formulario>
            </div>
            <div className="col-12 col-md-8">
              <Lista productos={ this.state.listaProductos } ></Lista>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
