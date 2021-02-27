import { Component } from 'react';

class Despedida extends Component {
    render() {
        return <h2>Adios {this.props.nombre}</h2>;
    }
}

export default Despedida;