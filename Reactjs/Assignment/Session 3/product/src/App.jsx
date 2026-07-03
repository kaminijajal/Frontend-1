import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductCard from './Components/ProductCard'
import products from './ProductData'
import test from './assets/test.png'
import UserProfile from './Components/UserProfile'
import UserProfile1 from './Components/UserProfile1'
function App() {
 

  return (
    <>
      {products.map((item)=>(
        <ProductCard
            productName = {item.productName}
            price={item.price}
        />
        
      ))}
      <UserProfile profilePic={test} username ="Test" followers={1000}/>
      <UserProfile1 username="Testing"/>
    </>
  )
}

export default App
