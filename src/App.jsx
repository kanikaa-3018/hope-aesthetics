import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import WhatWeOffer from './components/WhatWeOffer'
import Speciality from './components/Speciality'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Speciality/>
    <AboutMe/>
    <WhatWeOffer/>
    <Gallery/>
    <Footer/>
    </>
  )
}

export default App
