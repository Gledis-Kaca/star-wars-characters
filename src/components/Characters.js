import React, { useState, useEffect } from 'react';
import FilteredCharacters from './FilteredCharacters';
import './Characters.scss';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

//Get the api data for characters, also getting specific data for each character because a species and homeword were linked to other API
  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        const charactersWithAdditionalInfo = await Promise.all(data.results.map(async character => {
          const homeworldResponse = await fetch(character.homeworld);
          if (!homeworldResponse.ok) {
            throw new Error('Failed to fetch homeworld data');
          }
          const homeworldData = await homeworldResponse.json();
          character.homeworld = homeworldData;

          if (character.species.length === 0) {
            character.species = "Human";
          } else {
            const speciesResponse = await fetch(character.species[0]);
            if (!speciesResponse.ok) {
              throw new Error('Failed to fetch species data');
            }
            const speciesData = await speciesResponse.json();
            character.species = speciesData.name;
          }

          const films = await Promise.all(character.films.map(async filmUrl => {
            const filmResponse = await fetch(filmUrl);
            if (!filmResponse.ok) {
              throw new Error('Failed to fetch film data');
            }
            const filmData = await filmResponse.json();
            return filmData.title;
          }));

          character.films = films;

          return character;
        }));

        setCharacters(charactersWithAdditionalInfo);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  // Handle pagination by remaking the call with different page number
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <FilteredCharacters characters={characters} />
      <div className='paginationButtons'>
        <button onClick={handlePrevPage} disabled={page === 1}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
};

export default Characters;
