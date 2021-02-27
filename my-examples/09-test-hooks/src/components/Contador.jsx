// Uso de useRef

import { useEffect, useState, useRef } from 'react';

export default function Contador() {

    // useRef permite almacenar el estado anterior
    const numero = useRef(0);
    const inputRef = useRef();

    const mensajeAnterior = useRef('');
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        numero.current = numero.current + 1;
    });

    useEffect(() => {
        mensajeAnterior.current = mensaje;
    }, [ mensaje ]);

    const onFocus = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <p>Numero: { numero.current }</p>
            <p>Mensaje: { mensaje }</p>
            <p>Mensaje Anteriod: { mensajeAnterior.current }</p>
            <input ref={ inputRef } type="text" onChange={ (e) => setMensaje(e.target.value) }></input>
            <button onClick={ onFocus }>Focus</button>
        </div>
    );
}