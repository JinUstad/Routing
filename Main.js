import React from 'react'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'



function Main() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about"  element={<About />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Main;