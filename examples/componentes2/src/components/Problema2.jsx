import { useState } from 'react';

function Problema2() {

    const [count, setCount] = useState(0);

    function incrementar() {
        setCount(count => count + 1);
    }

    function handleClick() {
        // count = 1
        incrementar();
        // count = 1
        incrementar();
        // count = 1
        incrementar();
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Incrementa</button>
        </div>
    );

}

export default Problema2;