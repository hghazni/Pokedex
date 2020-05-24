import React, { useState, useEffect } from 'react';
import './App.css';
import { getPokemon, getAllPokemon } from './Pokemon';
import { Card } from './components/Card/Card';
import { Navigation } from './components/Navigation/Navigation';
import { Header } from './components/Header/Header';

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('')
  const [prevUrl, setPrevUrl] = useState('')
  const [loading, setLoading] = useState(true)
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      let response:any = await getAllPokemon(initialUrl)
      setNextUrl(response.next)
      setPrevUrl(response.prev)
      await loadPokemon(response.results)
      setLoading(false)
    }
    fetchData()
  }, [])

  const next = async () => {
    setLoading(true);
    let data:any = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data:any = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadPokemon = async (data:any) => {
    let _pokemonData:any = await Promise.all(data.map(async (pokemon:any) => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  if (loading) return <p>Loading...</p>


  return (
    <>
      <Header prev={prev} next={next}/>
      <div className={'CardWrapper'}>
        {pokemonData.map((pokemon:any, i:any) => {
          return <Card key={i} pokemon={pokemon}/>
        })}
      </div>
      <Navigation prev={prev} next={next}/>
    </>
  )
}

export default App
