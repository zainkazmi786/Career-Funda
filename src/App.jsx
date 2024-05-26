
import Home from "./components/home"
import Navbar from './components/navbar'
import Trends from './components/trends'
import React from 'react'

const App = () => {
  return (
    <body className="bg-black min-h-screen">
      <Navbar/>
      {/* <Home/> */}
      <Trends/>
    </body>
  )
}

export default App
