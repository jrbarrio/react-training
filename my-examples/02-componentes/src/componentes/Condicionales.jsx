import { useState } from 'react';

function Condicionales() {

    const [mostrar, setMostrar] = useState(true); 

    function handleClick() {
        setMostrar(!mostrar);
    }

    let contenido = null;
    if (mostrar) {
        contenido = <p>Contenido</p>;
    }

    return (<div>
        <button onClick={ handleClick }>Mostrar/Ocultar</button>
        { mostrar ? <p>Contenido</p> : null}
        { contenido }
        { mostrar && <p>Contenido</p> }
        { (() => {
            if (mostrar) {
                return <p>Contenido</p>
            }
        })()}
    </div>);
}

export default Condicionales;