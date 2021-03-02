import React from 'react'

import './Header.css'
import logo from '../assets/marvel.png'

const Header = () => {
  return (
    <header className='header'>
      <img className='logo' src={logo} alt='Marvel Logo' />
      <h1 className='text'>Characters</h1>
    </header>
  )
}

export default Header
