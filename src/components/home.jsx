import React from 'react'
import Navbar from "./navbar"
import Box from "./box"
import mag from '../assets/mag.svg';
import g from '../assets/g.svg';
const home = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center'>
      {/* <Navbar /> */}
      <div className="w-11/12 h-1/2 bg-blue-600 rounded-b-3xl border-blue-600 flex">
        <div className='h-full w-1/2'>

           <div className="mainheading text-white text-7xl font-mono font-extrabold h-2/3 w-full flex items-center p-10">Career Trend Analysis</div>
           <div className='h-1/3 w-full flex justify-start m-10 items-center gap-10'>
              <button className='w-48 h-12 rounded-full bg-white '> Start Now</button>
              <button className='w-48 h-12 rounded-full bg-white'> Try Demo </button>
           </div>
        </div>

        <div className='w-1/2 h-11/12 flex items-center'><img className='w-full h-2/3' src={g} alt="" /></div>
      </div>
      <div className="flex w-11/12 justify-between">
        <Box heading="Data insights " subheading="5TB+ Data" img={mag} />
        <Box heading="Engaged Users" subheading="6M+ Users" img={mag} />
        <Box heading="In Progress" subheading="6TB+ Data" img={mag} />
        <Box heading="Take Demo" subheading="Get Started for Free" img={mag} />
      </div>
    </div>
  )
}

export default home
