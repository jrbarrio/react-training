import { Component } from 'react';

class Listas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactos: [
                {
                    nombre: 'Jorge',
                    apellidos: 'Roldan',
                    edad: 42
                }, 
                {
                    nombre: 'Alicia',
                    apellidos: 'Roldan',
                    edad: 9
                },
                {
                    nombre: 'Beatriz',
                    apellidos: 'Fresno',
                    edad: 42
                }, 
                {
                    nombre: 'Manuel',
                    apellidos: 'Roldan',
                    edad: 7
                }
            ]
        };
    }    

    borrarContacto(index) {
        const contactosCopia = [ ...this.state.contactos];
        contactosCopia.splice(index, 1);
        this.setState({ contactos: contactosCopia });
    }

    // eslint-disable-next-line no-undef
    modificarNombre(event, index) {
        const contactoCopia = { ...this.state.contactos[index]};
        contactoCopia.nombre = event.target.value;
        const contactosCopia = [ ...this.state.contactos ];
        contactosCopia[index] = contactoCopia;
        this.setState({ contactos: contactosCopia });
    }

    render() {
        return (<div className="contactos">
            { (this.state.contactos || []).map( (contacto, index) =>
                (<div className="contacto" key={ index }>
                    <h4 onClick={ () => this.borrarContacto(index) }>{ contacto.nombre } { contacto.apellidos }</h4>
                    <p>{ contacto.edad }</p>
                    <input type="text" value={ contacto.nombre } onChange={ (event) => {
                        this.modificarNombre(event, index) 
                    } }></input>
                </div>)
            )}
        </div>);
    }
}

export default Listas;