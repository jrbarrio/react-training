import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DetallePersona({ url }) {

    const [ personaje, setPersonaje] = useState(null);

    useEffect(() => console.log('RENDER DETALLE'));
    // Al no tener dependencias(segundo parametros), se ejecuta despues de cada renderizado

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setPersonaje(response.data);
            });
    }, [url]);
    // Si la url cambia, ahora esto reacciona en consecuencia

    return (
        <div>
            <h2>DETALLE</h2>
            { 
                personaje &&
                <div>
                    <p>Nombre: {personaje.name}</p>
                    <p>Ojos: {personaje.eye_color}</p>
                    <p>Piel: {personaje.skin_color}</p>
                </div>
            }
        </div>
    );
}

export default React.memo(DetallePersona);
// memo sirve para evitar la renderizacion en funcion de los cambios en el padre