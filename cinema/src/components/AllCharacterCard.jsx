import React from 'react';

function AllCharacterCard(props) {
    return (
        <div className="pic">
            <h1><a href={"SingleCharacterPage/"+props.href}>{props.title}</a></h1><br></br>
            <img className="imgGrip" src={props.img} alt={props.title} width="250" height="auto"/>
            <p>
              <b>Genero:</b> {props.genre}<br></br>
              <b>Estado:</b> {props.status}<br></br>
              {/*<b>Personajes</b> {props.characters}<br></br>*/}
            </p>
        </div>
      );
}

export default AllCharacterCard;