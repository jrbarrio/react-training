import { useEffect, useState } from 'react';

export default function ShowDouble({ getDouble: getDouble }) {
    
    const [double, setDouble] = useState(0);

    useEffect(() => {
        setDouble(getDouble())
        console.log("Render double")
    }, [ getDouble ]);

    return <h2>{ double }</h2>
}