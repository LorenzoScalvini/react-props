import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Postcard from './components/Postcard/Postcard'

function App() {

  return (
    <div>
      <Header />
      <Hero />
      <Postcard />
    </div>
  )
}

export default App
