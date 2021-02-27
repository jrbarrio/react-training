import { useState } from 'react';

export default function Cabecera({ texto }) {
    
    const [ contador, setContador] = useState(0);
    
    return (
        <div>
            <h1 data-testid="h1tag" className="header">{ texto }</h1>
            <p data-testid="pCont">{ contador }</p>
            <button onClick={ () => setContador(contador + 1) }>Incrementa</button>
        </div>
    );
}