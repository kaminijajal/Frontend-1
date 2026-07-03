import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserGreeting from './components/UserGreeting'
import UserGreetingClass from './components/UserGreetingClass'
import MiniProfile from './components/MiniProfile'
import MiniProfile1 from './components/MiniProfile1'

function App() {

  return (
   <>
      <h1>Welcome to React JSX!</h1>
      
      <UserGreeting username = "Test"/>
      <UserGreetingClass username="Testing"/>
      <MiniProfile/>
      <MiniProfile1/>

   </>
  )
}

export default App
