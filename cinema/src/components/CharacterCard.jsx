import React from 'react';

function CharacterCard(props) {
    return (
        <div className="pic">
            <h1>{props.title}</h1><br></br>
            <img src={props.url} alt={props.movieName} />
            <p>
              <b>Genero:</b> {props.genre}<br></br>
              <b>Estado:</b> {props.status}<br></br>
              <b>Personajes</b>
            </p>
        </div>
      );
}

export default CharacterCard;