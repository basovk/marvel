import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/Header'
import Search from './components/Search'
import Card from './components/Card'
import Footer from './components/Footer'

import './App.css'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getCharacters = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios(
        `https://gateway.marvel.com/v1/public/characters?apikey=5fe4afe0378a32c44a0b500cb377b926`
      )

      const characters = data.data.results
      console.log(characters)
      setCharacters(characters)
      setIsLoading(false)
    } catch (error) {
      console.log(`Error getting the data: `, error)
    }
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <>
      <Header />
      <main className='main-container'>
        <div className='search-box'>
          <Search />
        </div>
        {!isLoading && (
          <div className='grid-layout'>
            {characters.map((character) => (
              <Card
                key={character.id}
                char_name={character.name}
                char_image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
