import { useState } from 'react';

function Sum(props) {

    const [result, setResult] = useState(0);
    const [counter, setCounter] = useState(0);

    function handleClick() {
        setResult(result => {
            const sum = props.numA + props.numB
            props.sumFinished(sum);
            return sum;
        });
    }

    function increment() {
        setCounter(counter + 1);
    }

    return (<div>
        <p>{ props.numA + props.numB }</p>
        <button onClick={ handleClick }>SUM</button>
        <p>{ result }</p>
        <h3>Counter</h3>
        <p>{ counter }</p>
        <button onClick={ increment }>Increment</button>
        <button onClick={ () => props.countFinished(counter) }>Inform parent</button>
    </div>);
}

export default Sum;