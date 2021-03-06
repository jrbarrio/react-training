import { useEffect, useState } from 'react';
import axios from '../instances/axiosSW';
import Character from './Character';

export default function CharacterList() {

    const [ characters, setCharacters ] = useState(null);
    const [ selectedUrl, setSelecetdUrl ] = useState(null);
    const [ counter, setCounter ] = useState(0);

    useEffect(() => {
        axios.get('/people/?format=json')
            .then(response => {
                return response.data.results.slice(0, 4);
            })
            .then(characters => setCharacters(characters));
    }, []);
    // Empty array as second parameter, only executes at first render, as after that there is nothing to compare against

    let characterList = <h3>No characters</h3>;
    if (characters && characters.length > 0) {
        characterList = characters.map(character => {
            return (
                <div 
                    className="character" 
                    onClick={ () => setSelecetdUrl(character.url) }
                    key={ character.name }>
                    <h3>{ character.name }</h3>
                    <p>Born: { character.birth_year}</p>
                    <p>Films: { character.films.length }</p>
                </div>
            );
        });
    }

    return (
        <div>
            <h2>Character List</h2>
            <div className="characters">
                { characterList }
            </div>
            { 
                selectedUrl && <Character url={ selectedUrl }></Character> 
            }
            <button onClick={() => setCounter(counter + 1)}>{ counter }</button>
        </div>
    );

}