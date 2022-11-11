import React from 'react'
import "./CardActivity.css"
function CardActivity({name, difficulty, duration,season}) {
  return (
    <div className="card-activity-container">
        <span><strong>Name: </strong>{name}</span>
        
        <span><strong>Difficulty: </strong>{difficulty}</span>
        <span><strong>Duration: </strong>{duration}</span>
        <span><strong>Season: </strong>{season}</span>
    </div>
  )
}

export default CardActivity