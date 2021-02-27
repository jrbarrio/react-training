import { useState } from 'react';

function Condicionales() {

    const [mostrar, setMostrar] = useState(true);

    function handleClick() {
        setMostrar(!mostrar);
    }

    let contenido = null;
    if (mostrar) {
        contenido = <p>Contenido condicional</p>;
    }

    return (
        <div>
            <button onClick={handleClick}>{mostrar ? 'Ocultar' : 'Mostrar'}</button>
            {contenido}
            {mostrar &&
                <div>
                    <p>Contenido 2</p>
                </div>}
            <hr />
            {(() => {
                if (mostrar) {
                    return <p>Párrafo desde función</p>;
                }
            })()}
        </div>
    );

}

export default Condicionales;