import { useEffect, useState } from 'react';

export default function MostrarDoble({ getDoble }) {
    
    const [doble, setDoble] = useState(0);

    useEffect(() => {
        setDoble(getDoble())
        console.log("Render hijo")
    }, [ getDoble ]);

    return <h2>{ doble }</h2>
}