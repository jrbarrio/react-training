import { useState } from 'react';

function Animales(props) {

    const [animalesState, setAnimalesState] = useState([
        { nombre: 'Gary', tipo: 'gato', edad: 12 },
        { nombre: 'Bobby', tipo: 'perro', edad: 14 },
        { nombre: 'Lily', tipo: 'pajaro', edad: 2 }
    ]);
    const [mensajeState, setMensajeState] = useState('Este es el mensaje');

    function handleClick(event) {
        console.log('Se ha pulsado el botón');
        setMensajeState('Nuevo mensaje desde botón');
    }

    function handleClickAgregar() {
        const nuevoArr = [...animalesState];
        // const nuevoArr = animalesState.slice();
        nuevoArr.push({ nombre: 'Rocky', tipo: 'hamster', edad: 5 });
        setAnimalesState(nuevoArr);
    }

    return <div>
        <p>{mensajeState}</p>
        <p>{animalesState[1].nombre}</p>
        <button onClick={handleClick}>Pulsa el botón</button>
        <button onClick={handleClickAgregar}>Agrega un animal</button>
    </div>;
}

export default Animales;