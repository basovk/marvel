import React from 'react'

import './Card.css'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({ char_name, onClick }) => {
  return (
    <div className='card-container'>
      <div className='char_image-container'>
        <img
          src='https://avatarfiles.alphacoders.com/149/149117.jpg'
          alt={char_name}
          className='char_image'
        />
      </div>
      <div className='header-container'>
        <div className='char_text-container'>
          <h2 className='char_text'>{char_name}</h2>
        </div>
        <div className='icon-container'>
          <FontAwesomeIcon
            icon={faBookmark}
            size='lg'
            style={{ color: '#dee2e6', cursor: 'pointer' }}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  )
}

export default Card
