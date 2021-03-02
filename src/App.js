import React from 'react'

import Header from './components/Header'
import Search from './components/Search'
import Card from './components/Card'
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <main className='main-container'>
        <div className='search-box'>
          <Search />
        </div>
        <div className='grid-layout'>
          <Card char_name='Spider-Man' onClick={() => console.log('clicked')} />
        </div>
      </main>
    </>
  )
}

export default App
