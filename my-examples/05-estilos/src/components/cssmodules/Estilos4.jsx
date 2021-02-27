import classes from './Estilos4.module.css'
import { useState } from 'react';

export default function Estilos4() {
    
    const [ activo, setActivo] = useState(true);

    let clases = [ classes.parrafo ];
    if (activo) {
        clases.push(classes.verde);
    }

    return (
        <div>
            <p className={ `${classes.parrafo} ${classes.verde}` }>Estamos aprendiendo CSS Modules en react</p>
            <p className={ clases.join(' ') }>Estamos aprendiendo CSS Modules en react</p>
            <button onClick={ () => setActivo(!activo) }>Cambiar Estado</button>
        </div>
    );
}
