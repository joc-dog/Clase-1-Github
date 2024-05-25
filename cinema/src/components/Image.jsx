import React from 'react';

function Image(props) {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return <img src={props.url} alt={props.movieName} />;
}

export default Image;