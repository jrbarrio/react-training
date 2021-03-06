import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Character from './components/Character';
import FlexWrapper from './components/ui/FlexWrapper';
import ButtonWrapper from './components/ui/ButtonWrapper';

function App() {

  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    async function getCharacters() {
      const response = await axios.get('https://rickandmortyapi.com/api/character?page=' + currentPage);
      setCharacters(response.data.results);
      setPages(response.data.info.pages);
    }
    getCharacters();
  }, [currentPage]);

  function handleClick(next) {
    if (next && currentPage <= pages) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  let page = 'medium';
  if (currentPage === 1) {
    page = 'first';
  } else if (currentPage === pages) {
    page = 'last';
  }

  return (
    <div>
      <ButtonWrapper page={page}>
        {currentPage !== 1 &&
          <button onClick={() => handleClick(false)}>Previous</button>
        }
        {currentPage !== pages &&
          <button onClick={() => handleClick(true)}>Next</button>
        }
      </ButtonWrapper>
      <FlexWrapper>
        {characters.map(character => (
          <Character {...character} key={character.id} />
        ))}
      </FlexWrapper>
    </div>
  );
}

export default App;
