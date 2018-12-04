import React from 'react';

const CardItem = (props) => {
  return (
    <div className='bg-light-green dib  br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${props.name}`} alt={props.name} />
        <div>
          <h2>{props.name}</h2>
          <p>{props.email}</p>
        </div>
      </div>
  )
}

export default CardItem;