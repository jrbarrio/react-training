import { useState } from 'react';

function Animals(props) {

    const [ animalsState, setAnimalsState] = useState(
        [
            { name: 'Gary', type: 'gato', age: 6 },
            { name: 'Lolo', type: 'perro', age: 12 },
            { name: 'Pumba', type: 'pajaro', age: 2 }
        ]
    );

    const [ messageState, setMessageState] = useState('These are my animals');

    // No need to use arrow functions in functional components to preserve the scope of 'this'
    function handleClick(event) {
        console.log(event);
        console.log(messageState);
        setMessageState('Do you like them?');
    }    

    function handleClickAdd() {
        const newAnimals = [ ...animalsState ];
        //const newAnimals = animalsState.slice();
        newAnimals.push({ name: 'Morris', type: 'raton', age: 1 })
        setAnimalsState(newAnimals);
    }

    return (<div>
        <p>{ messageState }</p>
        <div>{ animalsState.map(animal => <p>{ animal.name} </p>) }</div>    
        <button onClick={ handleClick }>Change message</button>
        <button onClick={ handleClickAdd }>Add an animal</button>
    </div>);
}

export default Animals;