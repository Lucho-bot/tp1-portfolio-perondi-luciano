import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'
import Skills from './components/Skills'

const App = () => {
  const nombre = "Luciano Perondi"
  const profesion = "Estudiante de programacion"
  const email = "lucianoperondi90@gmail.com"

  return (
    <div>    
      <Header nombre={nombre} profesion={profesion}/>
      <Hero/>
      <About/>
      <Skills/>
      <Footer nombre={nombre} email={email}/>      
    </div>
  )
}

export default App
