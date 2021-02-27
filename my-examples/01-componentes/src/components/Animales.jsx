import { useState } from 'react';

function Animales(props) {
    const [ animalesState, setAnimalesState] = useState(
        [
            { nombre: 'Gary', tipo: 'gato', edad: 6 },
            { nombre: 'Lolo', tipo: 'perro', edad: 12 },
            { nombre: 'Pumba', tipo: 'pajaro', edad: 2 }
        ]
    );

    const [ mensajeState, setMensajestate] = useState('Este es el mensaje');

    // Dentro de componentes funcionales no hace falta usar arrow functions para preservar el ambito de this
    function handleClick(event) {
        console.log(event);
        console.log(mensajeState);
        setMensajestate('Otro mensaje diferente');
    }    

    function handleClickAgregar() {
        const nuevo = [ ...animalesState ];
        //const nuevo = animalesState.slice();
        nuevo.push({ nombre: 'Morris', tipo: 'raton', edad: 1 })
        setAnimalesState(nuevo);
    }

    return (<div>
        <p>{ mensajeState }</p>
        <p>{ animalesState[1].nombre} </p>
        <button onClick={ handleClick }>Pulsa el boton</button>
        <button onClick={ handleClickAgregar }>Agrega un animal</button>
    </div>);
}

export default Animales;