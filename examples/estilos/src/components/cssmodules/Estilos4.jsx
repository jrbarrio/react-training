import classes from './Estilos4.module.css';
import { useState } from 'react';

export default function Estilos4() {

    const [activo, setActivo] = useState(true);

    let clases = [classes.parrafo];
    if (activo) {
        clases.push(classes.verde);
    }

    return (
        <div>
            <p className={`${classes.parrafo} rojo`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nam.</p>
            <p className={clases.join(' ')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia.</p>
            <button onClick={() => setActivo(!activo)}>Modificar estado</button>
        </div>
    );
}