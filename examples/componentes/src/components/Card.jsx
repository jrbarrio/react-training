import { Component } from 'react';

class Card extends Component {

    state = {
        titulo: 'Título de la card',
        texto: 'Este es el texto'
    }

    onClick = (event, pMensaje) => {
        console.log(event.target);
        console.log(this.state.titulo);
        this.setState({ texto: pMensaje });
    }

    render() {
        return (<div className="card">
            <h2>{this.state.titulo}</h2>
            <p>{this.state.texto}</p>
            <button onClick={event => this.onClick(event, 'Mensaje desde click')}>Pulsa el botón</button>
        </div>);
    }
}

export default Card;