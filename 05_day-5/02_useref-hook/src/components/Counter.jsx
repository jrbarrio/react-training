import { useEffect, useState, useRef } from 'react';

export default function Counter() {

    // useRef allows storing previous state
    const number = useRef(0);
    const inputRef = useRef();
    const previousMessage = useRef('');

    const [message, setMessage] = useState('');

    useEffect(() => {
        number.current = number.current + 1;
    });

    useEffect(() => {
        previousMessage.current = message;
    }, [ message ]);

    const onFocus = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <p>Number: { number.current }</p>
            <p>Message: { message }</p>
            <p>Previous message { previousMessage.current }</p>
            <input ref={ inputRef } type="text" onChange={ (e) => setMessage(e.target.value) }></input>
            <button onClick={ onFocus }>Focus</button>
        </div>
    );
}