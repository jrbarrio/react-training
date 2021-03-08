import { useState } from 'react';

export default function Header({ texto: text }) {
    
    const [ counter, setCounter] = useState(0);
    
    return (
        <div>
            <h1 data-testid="h1tag" className="header">{ text }</h1>
            <p data-testid="counter">{ counter }</p>
            <button onClick={ () => setCounter(counter + 1) }>Increment</button>
        </div>
    );
}