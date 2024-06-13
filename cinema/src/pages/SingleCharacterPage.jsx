import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SingleCharacter from '../components/SingleCharacterCard';

function SingleCharacterPage() {
  const { id } = useParams();
  const [personaje, setPersonajes] = useState(null);
  //const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data);

        // Replace spaces with hyphens in the character name
        const characterName = data.name.replace(/\s+/g, '-');

        // Update the URL to replace the ID with the character's name
        const url = new URL(window.location);
        url.pathname = `/SingleCharacterPage/${characterName}`;
        window.history.replaceState({}, '', url);
      })
      .catch(error => console.error('Error fetching character:', error));
  }, [id]);

  if (!personaje) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SingleCharacter 
        key={personaje.id} 
        title={personaje.name} 
        href={personaje.id} 
        genre={personaje.gender} 
        status={personaje.status} 
        img={personaje.image} 
      />
    </>
  );
}

export default SingleCharacterPage;
