import React from 'react';
import './disney.css';

const DisneyCharacterCards = ({ values, show }) => {

    const { films, imageUrl, name } = values;
  return (
    <div className='disney-cards'>
    {films.length > 0 ? films.map((film) => (
        <li>{film}</li>
    ))
    :
    <h4>An Unknown Movie</h4>
    }
    <img src={imageUrl}/>
    <p>{name}</p>
    </div>
  )
}

export default DisneyCharacterCards