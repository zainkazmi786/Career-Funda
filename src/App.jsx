import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/home"
import Navbar from './components/navbar'
import Trends from './components/trends'
import Feild from './components/field'
import AI from './components/AI'
import Footer from './components/footer';
import AboutUsPage from './components/about';
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
            <Route path="/field" element={<Feild />} />
            <Route path="/AI" element={<AI />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </body>
  )
}

export default App
