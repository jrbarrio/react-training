// Uso de useCallback

import { useState, useCallback } from 'react';
import MostrarDoble from './MostrarDoble';

export default function Dobles() {

    const [numero, setNumero] = useState(0);
    const [mensaje, setMensaje] = useState('');

    const getDoble = useCallback(() => {
        return numero * 2;
    }, [ numero ]);
    // Ejecutar esta funcion solo en el caso de que haya modificaciones en la dependencia (numero)

    return (
        <div>
            <p>Numero: { numero }</p>
            <p>Mensaje: { mensaje }</p>
            <button onClick={ () => setNumero(numero + 1)}>Incrementa numero</button>
            <input type="text" onChange={ (e) => setMensaje(e.target.value) }></input>
            <MostrarDoble getDoble={ getDoble }></MostrarDoble>
        </div>
    );
}