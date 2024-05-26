import React from 'react';
import { useState, useEffect } from 'react'
import AllCharacter from '../components/AllCharacterCard'

function AllCharactersPage() {
    const [pagina, setPagina] = useState(0)
    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
        .then((response) => response.json())
        .then((data) => setPersonajes(data.results))
    }, [pagina])
    
    console.log(personajes)

    const incrementarContador = () => {
      setPagina(pagina + 1)
    }

    const decrementarContador = () => {
        setPagina(pagina - 1)
      }

    return (
      <>
 <div className="gallery-paris">
            <div>
                <h1>Conoce los personajes</h1>
                <h3>Rick and Morty</h3>
                <div className="gallery-paris-pics">

        {personajes.length !== 0 && personajes.map((personaje) => (
          <AllCharacter key={personaje.id} title={personaje.name} href={personaje.id} genre={personaje.gender} status={personaje.status} img={personaje.image} />
        ))}
</div>
</div>
</div>

<div className="paginacion">
  <button className="anterior" onClick={decrementarContador} >Anterior</button>
  <button className="siguiente" onClick={incrementarContador} >Siguiente</button>
</div>

</>
    )
}

export default AllCharactersPage;