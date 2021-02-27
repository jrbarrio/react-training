import { Component } from 'react';

class Listas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contactos: [
                { nombre: 'Rosa', apellidos: 'Gómez', edad: 21 },
                { nombre: 'Luis', apellidos: 'García', edad: 43 },
                { nombre: 'Julia', apellidos: 'Romero', edad: 55 },
                { nombre: 'Manuel', apellidos: 'Robles', edad: 12 },
                { nombre: 'Antonio', apellidos: 'Martín', edad: 67 }
            ]
        };
    }

    borrarContacto = (pIndex) => {
        const contactosCopia = [...this.state.contactos];
        contactosCopia.splice(pIndex, 1);
        this.setState({ contactos: contactosCopia });
    }

    modificarNombre = (event, pIndex) => {
        const contacto = { ...this.state.contactos[pIndex] };
        contacto.nombre = event.target.value;
        const arrContactos = [...this.state.contactos];
        arrContactos[pIndex] = contacto;
        this.setState({ contactos: arrContactos })
    }

    render() {
        return (
            <div className="contactos">
                {(this.state.contactos || []).map((contacto, index) =>
                (<div className="contacto" key={index} >
                    <h4 onClick={() => this.borrarContacto(index)}>
                        {contacto.nombre} {contacto.apellidos}
                    </h4>
                    <p>{contacto.edad}</p>
                    <input
                        type="text"
                        value={contacto.nombre}
                        onChange={(event) => this.modificarNombre(event, index)}
                    />
                </div>)
                )}
            </div>
        );
    }
}

export default Listas;