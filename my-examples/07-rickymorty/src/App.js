import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './components/Character';
import FlexWrapper from './ui/FlexWrapper';

function App() {

  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      console.log(response);
      setCharacters(response.data.results);
    }
    getCharacters();
  }, []);
  // El array vacio hace que no ya una nueva renderizacion despues de la ejecucion del useEffect
  // Intenta comprar contra los elementos del array, que al estar vacio, no hay cambio
  // Sin segundo parametro, le decimos que no compare contra nada

  // let characterList = <h1>No se han recuperado los personajes</h1>
  // if (characters) {
  //   charactersList = 
  // } 

  return (
    <div className="App">
      <FlexWrapper>
        { characters.map(character => (
          <Character key={ character.id } { ...character }></Character>
        ))}
      </FlexWrapper>
    </div>
  );
}

export default App;
