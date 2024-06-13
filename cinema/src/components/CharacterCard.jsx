import React from 'react';

function CharacterCard(props) {
    return (
        <div className="pic">
            <h1><a href={props.link}>{props.title}</a></h1><br></br>
            <img src={props.url} alt={props.movieName} />
            <p>
              <b>Genero:</b> {props.genre}<br></br>
              <b>Estado:</b> {props.status}<br></br>
            </p>
        </div>
      );
}

export default CharacterCard;