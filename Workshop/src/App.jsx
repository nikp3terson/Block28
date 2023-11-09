import { useState } from 'react'
import Home from './components/home'
import Blue from './components/blue'
import Red from './components/red'
import { Routes, Route, Link} from "react-router-dom"
import './App.css'

function App() {
  

  return (
    <>
      <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
      </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
    </div>
    </>
  )
}

export default App
