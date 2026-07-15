import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TrendingSongs from './componats/TrendingSongs'
import IPLScoreFetcher from './componats/IPLScoreFetcher'
import MovieSuggestions from './componats/MovieSuggestions'
import DataFetcher from './componats/DataFetcher'

function App() {
  

  return (
    <>
    <TrendingSongs/>
    <IPLScoreFetcher/>
    <MovieSuggestions/>
    <DataFetcher/>
    </>
  )
}

export default App
