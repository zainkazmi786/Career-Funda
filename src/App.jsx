import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/home"
import Navbar from './components/navbar'
import Trends from './components/trends'
import React from 'react'

const App = () => {
  return (
    <body className="bg-black min-h-screen">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trends" element={<Trends />} />
          </Routes>
        </div>
      </Router>
    </body>
  )
}

export default App
