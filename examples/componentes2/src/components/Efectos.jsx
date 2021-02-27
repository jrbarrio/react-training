import { useEffect, useState } from 'react';

function Efectos(props) {

    const [count, setCount] = useState(0);
    const [mensaje, setMensaje] = useState('');

    function handleClick() {
        setCount(count + 1);
    }

    function handleClickMensaje() {
        setMensaje((new Date()).toString());
    }

    useEffect(() => {
        // if (count % 2 === 0 && count !== 0) {
        console.log('Contador', count);
        // }
    }, [count]);

    useEffect(() => {
        console.log('Mensaje', mensaje);
    }, [mensaje]);

    return (
        <div>
            <p>Contador: {count}</p>
            <p>Mensaje: {mensaje}</p>
            <button onClick={handleClick}>¡Incrementa!</button>
            <button onClick={handleClickMensaje}>Mensaje</button>
        </div>
    );

}

export default Efectos;