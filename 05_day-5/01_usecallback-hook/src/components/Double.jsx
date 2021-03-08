import { useState, useCallback } from 'react';
import ShowDouble from './ShowDouble';

export default function Double() {

    const [number, setNumber] = useState(0);
    const [message, setMessage] = useState('');

    const getDouble = useCallback(() => {
        return number * 2;
    }, [ number ]);
    // This function must be executed only when the dependency (number) has changed

    return (
        <div>
            <p>Number: { number }</p>
            <p>Message: { message }</p>
            <button onClick={ () => setNumber(number + 1)}>Increment number</button>
            <input type="text" onChange={ (e) => setMessage(e.target.value) }></input>
            <ShowDouble getDoble={ getDouble }></ShowDouble>
        </div>
    );
}