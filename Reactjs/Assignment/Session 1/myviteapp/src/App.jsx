import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './components/Home'
import './App.css'
import TrendingSong from './components/TrendingSong'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to My React Zomato App</h1>
      <Home/>
      <TrendingSong/>

    </>
      
  )
}

export default App
