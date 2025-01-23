import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Projects from './components/Projects'
import Skill from './components/Skill'

import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Education from './components/Education'


function App() {

  return (
    <div>

      <Header />

      <Banner />

      <About />
      <Education />

      <Projects />

      <Skill />
      
      <Contact />

      <Footer />
    </div>
  )
}

export default App