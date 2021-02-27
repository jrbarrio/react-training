import { Component } from 'react';

class Card extends Component {

    state = {
        titulo: 'Titulo de la card',
        texto: 'Text de la card'
    };

    // Dentro de componentes de clase hace falta usar arrow functions para preservar el ambito de this
    handleClick = (event, mensaje) => {
        console.log(event);
        console.log(this.state.titulo);
        this.setState({ texto: mensaje });
    }

    render() {
        return (<div className='card'>
            <h2>{ this.state.titulo }</h2>
            <p>{ this.state.texto }</p>
            <button onClick={ event => this.handleClick(event, 'Otro texto diferente') } >Pulsa el boton</button>
        </div>);
    }
}

export default Card;