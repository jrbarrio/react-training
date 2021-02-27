import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DetallePersona = React.memo(({ url }) => {

    const [personaje, setPersonaje] = useState(null);

    useEffect(() => console.log('RENDER Detalle'));

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setPersonaje(response.data);
            });
    }, [url]);

    return (
        <div>
            <h2>DETALLE</h2>
            {personaje &&
                <div>
                    <p>Nombre: {personaje.name}</p>
                    <p>Color Ojos: {personaje.eye_color}</p>
                    <p>Colo Piel: {personaje.skin_color}</p>
                </div>
            }
        </div>
    );
});

export default DetallePersona;