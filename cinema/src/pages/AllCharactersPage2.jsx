import React, { useState, useEffect } from 'react';
import AllCharacter2 from '../components/AllCharacterCard2';

function AllCharactersPage2() {

  const [pokemon, setPokemon] = useState()
  const [idPokemon, setIdPokemon] = useState(1)

  useEffect( () => {
    fetch("https://pokeapi.co/api/v2/pokemon/"+idPokemon)
    .then((response) => response.json())
    .then((result) => {
        setPokemon(result)
    });
  }, [idPokemon])
      
      const changePokemon = (e) => {
        setIdPokemon(e.target.value)
      }

  return (
    <>
      <h1>escribe el id de tu pokemon</h1>
      <input type='number' onChange={changePokemon} />
      {pokemon && (
        <div className='cards-container'>
          <AllCharacter2 image={pokemon.sprites.front_default} title={pokemon.name} detail={pokemon.abilities[0].ability.name} />
        </div>
      )}
    </>
  )
}

export default AllCharactersPage2;