import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleCharacter from '../components/SingleCharacterCard'


function SingleCharacterPage() {
  const { id } = useParams();
  const [personaje, setPersonajes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPersonajes(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <SingleCharacter key={personaje.id} title={personaje.name} href={personaje.id} genre={personaje.gender} status={personaje.status} img={personaje.image}  />
  );
}

export default SingleCharacterPage;