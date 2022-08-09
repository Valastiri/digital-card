import React from 'react'
import Info from "./components/info"
import About from "./components/about"
import Interests from "./components/interests"
import Footer from "./components/footer"
import './App.css'

export function App() {
  return (
    <div className='App'>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
