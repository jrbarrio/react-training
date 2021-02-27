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
            nombre: 'Otro',
            apellidos: 'Más',
            edad: 44
        });
    }

    return (
        <div>
            <p>{usuario.nombre}</p>
            <p>{usuario.apellidos}</p>
            <p>{usuario.edad}</p>
            <div>
                <label>Nombre</label>
                <input type="text"
                    value={usuario.nombre}
                    onChange={(event) => handleChange(event, 'nombre')}
                />
            </div>
            <div>
                <label>Apellidos</label>
                <input type="text"
                    value={usuario.apellidos}
                    onChange={(event) => handleChange(event, 'apellidos')}
                />
            </div>
            <div>
                <label>Edad</label>
                <input
                    type="text"
                    value={usuario.edad}
                    onChange={(event) => handleChange(event, 'edad')}
                />
            </div>
            <button onClick={cambiaDatos}>CAMBIA DATOS</button>
        </div>
    );

}

export default Formulario;