import React from 'react'

import './Card.css'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({ char_id, char_name, char_image, onClick, bookmarked }) => {
  return (
    <div className='card-container'>
      <div className='char_image-container'>
        <img src={char_image} alt={char_name} className='char_image' />
      </div>
      <div className='header-container'>
        <div className='char_text-container'>
          <h2 className='char_text'>{char_name}</h2>
        </div>
        <button className='icon-container'>
          <FontAwesomeIcon
            icon={faBookmark}
            size='lg'
            id={char_id}
            className={`${bookmarked ? 'icon-bookmarked' : 'icon'}`}
            onClick={onClick}
          />
        </button>
      </div>
    </div>
  )
}

export default Card
