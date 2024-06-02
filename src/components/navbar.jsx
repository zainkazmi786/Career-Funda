import React from 'react'
import { Link } from 'react-router-dom';
import Navcomp from './navcomp'
import logo from '../assets/CAREER FUNDA.png'

const navbar = () => {
    return (

        <div className="main  w-screen h-20 flex items-start justify-evenly sticky top-0 bg-gradient-to-t from-30% from-slate-900 to-slate-800 z-10">
            <div className="logo w-1/3 h-full flex items-center gap-5">
                <img className='h-2/3 filter' src={logo} alt="" />
                <h1 className="text-3xl text-white h-2/3">Career Funda</h1>
            </div>
            <ul className="navcontent w-1/3 h-3/4 flex justify-between items-start list-none">
                <li className='h-full'><Link to="/"><Navcomp compname="Home" /></Link></li>
                <li className='h-full'><Link to="/trends"><Navcomp compname="Trends" /></Link></li>
                <li className='h-full'><Link to="/recommendor"><Navcomp compname="Recommendor"/></Link></li>
                <li className='h-full'><Link to="/guidance"><Navcomp compname="Guidance" /></Link></li>
                <li className='h-full'><Link to="/about"><Navcomp compname="About Us" /></Link></li>

            </ul>


        </div>
    )
}

export default navbar
