import React from 'react'
import "./CardCountry.css";

function CardCountry({name,continent,subregion,capital,area,population,image}) {
  return (
    <div className='card-container'>
      <div className="card-image">
        <img src={image} alt="" />
      </div>

      <div className="card-body">
        <h3>{name}</h3>
        <h6><strong>Continent: </strong>{continent}</h6>
        <h6><strong>Subregion: </strong>{subregion}</h6>
        <h6><strong>Capital: </strong>{capital}</h6>
        <h6><strong>Area: </strong>{area}</h6>
        <h6><strong>Population: </strong>{population}</h6>
      </div>


    </div>
  )
}

export default CardCountry