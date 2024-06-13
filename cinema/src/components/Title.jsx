import React from 'react';

function Title(props) {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return <><h1><a href={props.link}>{props.title}</a></h1><br></br></>;
}

export default Title;