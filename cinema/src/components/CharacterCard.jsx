import React from 'react';

function CharacterCard(props) {
    return (
        <div class="pic">
            <h1>{props.title}</h1>
            <img src={props.url} alt={props.movieName} />
            <p>
              <b>Genero:</b> {props.genre}
            </p>
            <p>
              <b>Estado:</b> {props.status}
            </p>
        </div>
      );
}

export default CharacterCard;