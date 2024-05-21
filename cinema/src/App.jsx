import './App.css'

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
                    <div className='banner-subtitulo'>Ambientada varias generaciones en el futuro tras el reinado de César, en la que los simios son la especie dominante que vive en armonía...</div>
                </div>
            </div>
         
        <div className='gallery-paris'>
            <div>
                <h3>Estrenos</h3>
                <h1>SD</h1>
                <div className='gallery-paris-pics'>
                    <div className='pic1'></div>
                    <div className='pic2'></div>
                    <div className='pic3'></div>
                    <div className='pic4'></div>
                </div>
            </div>
        </div>
        <hr />
        <div className='gallery-berlin'>
            <div>
                <h3>Mejoradas</h3>
                <h1>HD</h1>
                <div className='gallery-berlin-pics'>
                    <div className='pic1'></div>
                    <div className='pic2'></div>
                    <div className='pic3'></div>
                    <div className='pic4'></div>
                </div>
            </div>
        </div>
        <hr />
        <div className='box-footer'>
            <div className='social'>
                <img src='../public/social_facebook.png' alt='facebook' />
                <img src='../public/social_instagram.png' alt='Instagram' />
                <img src='../public/social_youtube.png' alt='youtube' />
                <img src='../public/social_twitter.png' alt='X' />
            </div>
            <div>
                <h3>2024 CINEMA | COPYRIGHT</h3>
            </div>
        </div>
    </>
  )
}

export default App

