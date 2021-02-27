import { useEffect, useState } from 'react';

function Efectos() {

    const [count, setCount] = useState(0);
    const [mensaje, setMensaje] = useState('');

    function handleClick(event) {
        setCount(count + 1);
    }

    function handleClickMessage(event) {
        setMensaje((new Date()).toString());
    }

    useEffect(() => {
        if (count % 2 === 0 && count !== 0) {
            alert('El numero es par');
        }
    }, [count]);

    useEffect(() => {
        console.log('Mensaje', mensaje);
    }, [mensaje]);
    

    return (<div>
        <p>Contador: { count }</p>
        <p>Mensaje: { mensaje }</p>
        <button onClick={ handleClick }>Incrementa</button>
        <button onClick={ handleClickMessage }>Cambia Mensaje</button>
    </div>);
} 

export default Efectos;