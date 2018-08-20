import React from 'react'

export default (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.title}</p>
      <a href={props.teamLink}>Voir son équipe</a>
    </div>
  )
}
