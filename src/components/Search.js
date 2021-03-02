import React from 'react'

import './Search.css'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = ({ searchName, onChange }) => {
  return (
    <div className='search-box-container'>
      <div className='search-icon-container'>
        <FontAwesomeIcon
          icon={faSearch}
          size='lg'
          style={{ color: '#dee2e6' }}
        />
      </div>
      <input
        className='search-input'
        type='text'
        placeholder='Search characters...'
        value={searchName}
        onChange={onChange}
      />
    </div>
  )
}

export default Search
