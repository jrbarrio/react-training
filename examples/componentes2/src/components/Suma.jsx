import { useState } from 'react';

function Suma(props) {

    const [resultado, setResultado] = useState(0);
    const [contador, setContador] = useState(0);

    function handleClick() {
        // setResultado(resultado => {
        //     props.sumaFinalizada(props.numA + props.numB);
        //     return resultado;
        // });

        // resultado = 0
        setResultado(resultado => {
            return resultado + props.numB + props.numB;
        });
    }

    function handleClickIncrementa() {
        setContador(contador + 1);
    }

    return (
        <div>
            <h3>Suma</h3>
            <p>{props.numA} + {props.numB}</p>
            <button onClick={handleClick}>SUMA</button>
            <p>{resultado}</p>
            <h3>Contador</h3>
            <p>{contador}</p>
            <button onClick={handleClickIncrementa}>Incrementa</button>
            <button onClick={() => props.cuentaTerminada(contador)}>Pasar info al padre</button>
        </div>
    );

}

export default Suma;