import { useState } from 'react';

function Suma(props) {

    const [resultado, setResultado] = useState(0);
    const [contador, setContador] = useState(0);

    function handleClick() {
        setResultado(resultado => {
            const result = props.numA + props.numB
            props.sumaFinalizada(result);
            return result;
        });
    }

    function incrementa() {
        setContador(contador + 1);
    }

    return (<div>
        <p>{ props.numA + props.numB }</p>
        <button onClick={ handleClick }>SUMA</button>
        <p>{ resultado }</p>
        <h3>Conador</h3>
        <p>{ contador }</p>
        <button onClick={ incrementa }>Incrementa</button>
        <button onClick={ () => props.cuentaTerminada(contador) }>Pasar info al padre</button>
    </div>);
}

export default Suma;