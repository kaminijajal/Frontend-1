import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LikeButton from './components/LikeButton'
import CartItem from './components/CartItem'
import SongVote from './components/SongVote'
import RatingSelector from './components/RatingSelector'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h1><i>Like Button Example</i></h1>
      <LikeButton/>
      
    <h1><i>Cart Item Example</i></h1>
    <CartItem/>
    <h1><i>Song Votes Example</i></h1>
    <SongVote/>
  
    <h1><i>Rating Selector Example</i></h1>
    <RatingSelector/>
    </>
  )
}

export default App
