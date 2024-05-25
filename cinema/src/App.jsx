import './App.css'
import Title from './components/Title'
import Image from './components/Image'
import Details from './components/Details'
import CharacterCard from './components/CharacterCard'
import ImageMovie from '../public/prueba1.webp'
import ImageMovieBarbie from '../public/barbie.jpg'
import ImageMovieImpecable from '../public/impecable.jpg'

function App() {

  return (
    <>
        <div className='box-header'>
            <img src='../public/logo.png' alt='Logo' />
            <img src='../public/hamburger-icon.png' alt='Hamburguesa' />
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
                        <Title title="Planeta de los Simios" />
                        <Image url={ImageMovie} movieName="Planeta de los Simios" />
                        <Details genre="Ficción" status="18 años" />
                    </div>
                    <div className="pic">
                        <Title title="Planeta de los Simios" />
                        <Image url={ImageMovie} movieName="Planeta de los Simios" />
                        <Details genre="Ficción" status="18 años" />
                    </div>
                    <div className="pic">
                        <Title title="Planeta de los Simios" />
                        <Image url={ImageMovie} movieName="Planeta de los Simios" />
                        <Details genre="Ficción" status="18 años" />
                    </div>
                    <div className="pic">
                        <Title title="Planeta de los Simios" />
                        <Image url={ImageMovie} movieName="Planeta de los Simios" />
                        <Details genre="Ficción" status="18 años" />
                    </div>
                </div>
            </div>
        </div>


        <div class="gallery-paris">
            <div>
                <h1>RETO</h1>
                <h3>CharacterCard</h3>
                <div className="gallery-paris-pics">
                        <CharacterCard title="Planeta de los Simios" url={ImageMovie} movieName="Planeta de los Simios" genre="Ficción" status="18 años" />
                        <CharacterCard title="Barbie" url={ImageMovieBarbie} movieName="Barbie" genre="Comedia" status="12 años" />
                        <CharacterCard title="Impecable" url={ImageMovieImpecable} movieName="Impecable" genre="Acción" status="12 años" />
                </div>
            </div>
        </div>


    </>
  )
}

export default App

