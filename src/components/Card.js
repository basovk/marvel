import React from 'react'

import './Card.css'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({ char_name, char_image, onClick }) => {
  return (
    <div className='card-container'>
      <div className='char_image-container'>
        <img src={char_image} alt={char_name} className='char_image' />
      </div>
      <div className='header-container'>
        <div className='char_text-container'>
          <h2 className='char_text'>{char_name}</h2>
        </div>
        <button className='icon-container' onClick={onClick}>
          <FontAwesomeIcon
            icon={faBookmark}
            size='lg'
            id={char_name}
            className='icon'
          />
        </button>
      </div>
    </div>
  )
}

export default Card
