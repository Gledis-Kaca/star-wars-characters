import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import "./FilteredCharacters.scss";

const FilteredCharacters = ({ characters }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedHomeworld, setSelectedHomeworld] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedFilm, setSelectedFilm] = useState("");

  const homeworldOptions = Array.from(
    new Set(characters.map((character) => character.homeworld.name))
  );
  const speciesOptions = Array.from(
    new Set(characters.map((character) => character.species))
  );
  const filmOptions = Array.from(
    new Set(
      characters.reduce(
        (films, character) => [...films, ...character.films],
        []
      )
    )
  );

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleHomeworldFilterChange = (event) => {
    setSelectedHomeworld(event.target.value);
  };

  const handleSpeciesFilterChange = (event) => {
    setSelectedSpecies(event.target.value);
  };

  const handleFilmFilterChange = (event) => {
    setSelectedFilm(event.target.value);
  };

  //Implemented search, and filtering by homeworld, species and movies data passed here as props and combined them.
  const filteredCharacters = characters.filter((character) => {
    const homeworldFilter = selectedHomeworld
      ? character.homeworld.name === selectedHomeworld
      : true;
    const speciesFilter = selectedSpecies
      ? character.species === selectedSpecies
      : true;
    const searchFilter = searchInput
      ? character.name.toLowerCase().includes(searchInput.toLowerCase())
      : true;
    const filmFilter = selectedFilm
      ? character.films.includes(selectedFilm)
      : true;
    return homeworldFilter && speciesFilter && searchFilter && filmFilter;
  });

  return (
    <div>
      <div className="filter-container">
        <div>
          <input
            className="filter-input"
            type="text"
            placeholder="Search by character name"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </div>
        <div>
          <label>Filter by Homeworld:</label>
          <select
            className="filter-select"
            value={selectedHomeworld}
            onChange={handleHomeworldFilterChange}
          >
            <option value="">All</option>
            {homeworldOptions.map((homeworld) => (
              <option key={homeworld} value={homeworld}>
                {homeworld}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Filter by Species:</label>
          <select
            className="filter-select"
            value={selectedSpecies}
            onChange={handleSpeciesFilterChange}
          >
            <option value="">All</option>
            {speciesOptions.map((species) => (
              <option key={species} value={species}>
                {species}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Filter by Film:</label>
          <select
            className="filter-select"
            value={selectedFilm}
            onChange={handleFilmFilterChange}
          >
            <option value="">All</option>
            {filmOptions.map((film) => (
              <option key={film} value={film}>
                {film}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="character-container">
        {filteredCharacters.map((character) => (
          <CharacterCard
            key={character.name}
            character={character}
            className="character-card"
          />
        ))}
      </div>
    </div>
  );
};

export default FilteredCharacters;
