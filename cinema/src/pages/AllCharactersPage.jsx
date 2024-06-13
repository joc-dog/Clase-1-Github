import React, { useState, useEffect } from 'react';
import AllCharacter from '../components/AllCharacterCard';
import ReactPaginate from 'react-paginate';

function AllCharactersPage() {
    const [pagina, setPagina] = useState(0);
    const [cantidadPaginas, setCantidadPaginas] = useState(0);
    const [personajes, setPersonajes] = useState([]);
    const [nameFilter, setNameFilter] = useState('');

    useEffect(() => {
        const url = new URL(window.location);
        const pageParam = url.searchParams.get('page');
        setPagina(pageParam ? parseInt(pageParam, 10) - 1 : 0);
    }, []);

    useEffect(() => {
        const fetchCharacters = async () => {
            let apiUrl = `https://rickandmortyapi.com/api/character/?page=${pagina + 1}`;
            if (nameFilter) {
                apiUrl += `&name=${nameFilter}`;
            }

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setPersonajes(data.results);
                setCantidadPaginas(data.info.pages);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCharacters();
    }, [pagina, nameFilter]);

    const handlePageChange = (event) => {
        const selectedPage = event.selected;
        setPagina(selectedPage);

        const url = new URL(window.location);
        url.searchParams.set('page', selectedPage + 1);
        window.history.replaceState({}, '', url);
    };

    const changeName = (e) => {
        setNameFilter(e.target.value);
        setPagina(0); // Reset the page to 0 when filter changes
    };

    return (
        <>
            <div className="gallery-paris">
                <div>
                    <h1>Conoce los personajes</h1>
                    <h3>Rick and Morty</h3>

                    <input
                        id="searchInput"
                        placeholder="Busca el personaje!"
                        type="text"
                        onChange={changeName}
                    />

                    <div className="gallery-paris-pics">
                        {personajes.length !== 0 &&
                            personajes.map((personaje) => (
                                <AllCharacter
                                    key={personaje.id}
                                    title={personaje.name}
                                    href={personaje.id}
                                    genre={personaje.gender}
                                    status={personaje.status}
                                    img={personaje.image}
                                />
                            ))}
                    </div>
                </div>
            </div>

            <ReactPaginate
                breakLabel="..."
                nextLabel="Siguiente >"
                onPageChange={handlePageChange}
                pageCount={cantidadPaginas}
                previousLabel="< Anterior"
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                containerClassName={'pagination'}
                activeClassName={'active'}
                forcePage={pagina}
            />
        </>
    );
}

export default AllCharactersPage;
