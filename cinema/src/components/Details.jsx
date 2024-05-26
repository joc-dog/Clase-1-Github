import React from 'react';

function Details(props) {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return (
    <>
        <p>
          <b>Genero:</b> {props.genre}<br></br>
          <b>Estado:</b> {props.status}<br></br>
          <b>Personajes</b>
        </p>
    </>
  );
}
export default Details;