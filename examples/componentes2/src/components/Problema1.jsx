import { useState } from 'react';

function Problema1() {

    const [state, setState] = useState({
        mensaje: 'valor del mensaje',
        texto: 'valor del texto'
    });

    function cambiaMensaje() {
        setState(state => {
            return {
                ...state,
                mensaje: 'Nuevo mensaje'
            };
        });
    }

    function cambiaTexto() {
        setState(state => ({
            ...state,
            texto: 'Nuevo texto'
        }));
    }

    function handleClick() {
        cambiaMensaje();
        setTimeout(cambiaTexto, 1000);
    }

    return (
        <div>
            <p>Mensaje: {state.mensaje}</p>
            <p>Texto: {state.texto}</p>
            <button onClick={handleClick}>Pulsa para cambiar</button>
        </div>
    );

}

export default Problema1;