import React, { useEffect, useState } from 'react'
import Character from './Character'
import NavPage from './NavPage'

function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [nextPage, setNextPage] = useState(null)
  const [prevPage, setPrevPage] = useState(null)

  useEffect(() => {
    async function rickAndMortyAPI() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      )
      const data = await response.json()

      setCharacters(data.results)
      setNextPage(data.info.next)
      setPrevPage(data.info.prev)
      setLoading(false)
    }
    rickAndMortyAPI()
    return () => {}
  }, [page])

  return (
    <div className="container ">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          <NavPage
            page={page}
            setPage={nextPage => setPage(nextPage)}
            prevPage={prevPage}
            nextPage={nextPage}
          />
          {characters.map(character => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            )
          })}
          <NavPage
            page={page}
            setPage={nextPage => setPage(nextPage)}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </div>
      )}
    </div>
  )
}

export default CharacterList
