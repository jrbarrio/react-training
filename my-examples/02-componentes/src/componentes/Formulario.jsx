import React from 'react';

function Formulario() {

    const [usuario, setUsuario] = React.useState({
        nombre: '',
        apellidos: '',
        edad: 0
    });

    function handleChange(event, field) {
        setUsuario({
            ...usuario,
            [field]: event.target.value
        });
    }

    function cambiaDatos() {
        setUsuario({
            nombre: 'Jorge',
            apellidos: 'Roldan',
            edad: 42
        });
    }

    // Ejemplo de 2-way binding en React
    return (<div>
        <p>{ usuario.nombre }</p>
        <p>{ usuario.apellidos }</p>
        <p>{ usuario.edad }</p>

        <label>Nombre</label>
        <input type="text" value={ usuario.nombre } onChange={ event => handleChange(event, 'nombre') }></input>
        <label>Apellidos</label>
        <input type="text" value={ usuario.apellidos } onChange={ event => handleChange(event, 'apellidos') }></input>
        <label>Edad</label>
        <input type="text" value={ usuario.edad } onChange={ event => handleChange(event, 'edad') }></input>
        <button onClick={ cambiaDatos }>CAMBIA DATOS</button>
    </div>);
}

export default Formulario;