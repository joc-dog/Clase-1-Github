import React from 'react';
import Title from '../components/Title'
import Image from '../components/Image'
import Details from '../components/Details'
import CharacterCard from '../components/CharacterCard'
import ImageRickAndMorty from '../../public/rickandmorty.jpg'
import ImagePokemon from '../../public/pokemon.jpg'
import ImageMovie from '../../public/prueba1.webp'
import ImageMovieBarbie from '../../public/barbie.jpg'
import ImageMovieImpecable from '../../public/impecable.jpg'

function HomePage() {
  return (
    <>
        <div className='box-header'>
            <img src='../public/logo.png' alt='Logo' />
            {/*<img src='../public/hamburger-icon.png' alt='Hamburguesa' />*/}
        </div>

        <div className='banner'>
        <div>
            <div className='banner-titulo'>El reino del planeta de los simios</div>
            <div className='banner-subtitulo'>Ambientada varias generaciones en el futuro tras el reinado de César...</div>
        </div>    
        </div>

        <div class="gallery-paris">
            <div>
                <h1>TAREA</h1>
                <h3>Componentes</h3>
                <div className="gallery-paris-pics">
                    <div class="pic">
                        <Title link="/AllCharactersPage" title="Rick and Morty" />
                        <Image url={ImageRickAndMorty} movieName="Rick and Morty" />
                        <Details genre="Ficción" status="12 años" />
                    </div>
                    <div className="pic">
                        <Title link="/AllCharactersPage2" title="Pokemon" />
                        <Image url={ImagePokemon} movieName="Pokemon" />
                        <Details genre="Infantil" status="Sin restricción" />
                    </div>
                    <div className="pic">
                        <Title title="Planeta de los Simios" />
                        <Image url={ImageMovie} movieName="Planeta de los Simios" />
                        <Details genre="Ficción" status="18 años" />
                    </div>
                    <div className="pic">
                        <Title title="Barbie" />
                        <Image url={ImageMovieBarbie} movieName="Barbie" />
                        <Details genre="Comedia" status="12 años" />
                    </div>
                </div>
            </div>
        </div>


        <div class="gallery-paris">
            <div>
                <h1>RETO</h1>
                <h3>CharacterCard</h3>
                <div className="gallery-paris-pics">
                        <CharacterCard link="/AllCharactersPage" title="Rick and Morty" url={ImageRickAndMorty} movieName="Rick and Morty" genre="Ficción" status="12 años" />
                        <CharacterCard title="Planeta de los Simios" url={ImageMovie} movieName="Planeta de los Simios" genre="Ficción" status="18 años" />
                        <CharacterCard title="Barbie" url={ImageMovieBarbie} movieName="Barbie" genre="Comedia" status="12 años" />
                        <CharacterCard title="Impecable" url={ImageMovieImpecable} movieName="Impecable" genre="Acción" status="12 años" />
                </div>
            </div>
        </div>


    </>
  );
}

export default HomePage;