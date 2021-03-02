import { useState } from 'react';

function Counter() {
    
    const [count, setCount] = useState(0);

    
    function increment() {
        setCount(count => count + 1);
    }

    function handleClick() {
        increment();
        increment();
        increment();
    }

    return (<div>
        <p>Count: { count }</p>
        <button onClick={ handleClick }>Increment</button>
    </div>);
}

export default Counter;