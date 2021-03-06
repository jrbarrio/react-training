import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Character({ url }) {

    const [ character, setCharacter ] = useState(null);

    useEffect(() => console.log('RENDER DETALLE'));
    // No dependencies(no second parameter specified), so it executes after every render

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setCharacter(response.data);
            });
    }, [url]);
    // When URL changes, it is re-rendered

    return (
        <div>
            <h2>CHARACTER</h2>
            { 
                character &&
                <div>
                    <p>Name: {character.name}</p>
                    <p>Eyes: {character.eye_color}</p>
                    <p>Skin: {character.skin_color}</p>
                </div>
            }
        </div>
    );
}

// export default Character;
export default React.memo(Character);
// Using memo rendering is avoided when parent changes, for example by updating the counter