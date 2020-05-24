import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Pagination } from './components/Pagination/Pagination';
import { getPokemon } from './Pokemon';
import { Card } from './components/Card/Card';

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [currentPageUrl, setcurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel:any
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(async res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      let pokemon = await loadingPokemon(res.data.results)
    })

  const loadingPokemon = async (data: any) => {
    let _pokemonData:any = await Promise.all(data.map(async (pokemon:any) => {
      let pokemonRecord = await getPokemon(pokemon.url)
      return pokemonRecord
    }))

    setPokemonData(_pokemonData)
    console.log(_pokemonData);
  }

    return () => cancel()
    }, [currentPageUrl])

    function gotoNextPage() {
      setcurrentPageUrl(nextPageUrl)
    }

    function gotoPrevPage() {
      setcurrentPageUrl(prevPageUrl)
    }

  if (loading) return <p>Loading...</p>

  return (
    <>
      {pokemonData.map((pokemon, i) => {
        return <Card key={i} pokemon={pokemon}/>
      })}
      <Pagination gotoNextPage={gotoNextPage} gotoPrevPage={gotoPrevPage} />
    </>
  );
}

export default App;
