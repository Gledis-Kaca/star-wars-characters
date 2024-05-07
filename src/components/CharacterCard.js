import React, { useState, useEffect, useCallback } from 'react';
import './CharacterCard.scss';
import speciesColorMap from './speciesColorMap';
import { format } from 'date-fns';

const CharacterCard = ({ character }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");

  const speciesName = character.species;
  const speciesColor = speciesColorMap[speciesName] || "#000000";

  const formatDate = useCallback(() => {
    const date = new Date(character.created);
    const formatted = format(date, 'dd-MM-yy');
    setFormattedDate(formatted);
  }, [character.created]);

  useEffect(() => {
    formatDate();
  }, [formatDate]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="character-card" onClick={toggleModal}>
      <div className='card-item' style={{ backgroundColor: speciesColor }}>{character.name}</div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={toggleModal}>Close</button>
            <h2>{character.name}</h2>
            <p>Height: {character.height} cm</p>
            <p>Mass: {character.mass} kg</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
            <p>Date added: {formattedDate}</p>
            {character.homeworld && (
              <div>
                <h3>Homeworld</h3>
                <p>Name: {character.homeworld.name}</p>
                <p>Terrain: {character.homeworld.terrain}</p>
                <p>Climate: {character.homeworld.climate}</p>
                <p>Residents: {character.homeworld.residents.length}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterCard;
