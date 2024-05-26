import React from 'react';

function SingleCharacterCard(props) {
    return (
        <>
        <div className='title-single-character'>{props.title}</div>
        <img src={props.img} alt={props.title} className="full-page-img"/>
        <div className='text-single-character'>Genero: {props.genre}</div>
        <div className='text-single-character'>Estado: {props.status}</div>
        </>
      );

}

export default SingleCharacterCard;