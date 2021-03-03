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
  const [searchedChars, setSearchedChars] = useState([])
  const [keyword, setKeyword] = useState('')

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

  const onChange = (e) => {
    setKeyword(e.target.value)
  }

  useEffect(() => {
    getCharacters()
  }, [])

  useEffect(() => {
    setSearchedChars(
      characters.filter((character) =>
        character.name.toLowerCase().includes(keyword.toLowerCase())
      )
    )
  }, [keyword, characters])

  let displayedChars

  if (keyword === '') {
    displayedChars = characters
  } else {
    displayedChars = searchedChars
  }

  return (
    <>
      <Header />
      <main className='main-container'>
        <div className='search-box'>
          <Search value={keyword} onChange={onChange} />
        </div>
        {!isLoading && (
          <div className='grid-layout'>
            {displayedChars.map((character) => (
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
