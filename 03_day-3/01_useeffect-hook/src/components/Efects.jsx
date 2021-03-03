import { useEffect, useState } from 'react';

function Efects() {

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    function handleClick(event) {
        setCount(count + 1);
    }

    function handleClickMessage(event) {
        setMessage((new Date()).toString());
    }

    // This hook substitutes in functional component the methods componentDidMount y componentDidUpdate from class components. 
    // It is always executed after the render.
    useEffect(() => {
        if (count % 2 === 0 && count !== 0) {
            alert('Number is even');
        }
    }, [count]);

    useEffect(() => {
        console.log('Message', message);
    }, [message]);
    

    return (<div>
        <p>Count: { count }</p>
        <p>Message: { message }</p>
        <button onClick={ handleClick }>Increment</button>
        <button onClick={ handleClickMessage }>Change message</button>
    </div>);
} 

export default Efects;