import React from 'react'
import Navcomp from './navcomp'

const navbar = () => {
    return (

        <div className="main  w-screen h-20 flex items-start justify-center sticky top-0 bg-gradient-to-t from-30% from-slate-900 to-slate-800 z-10">
            <div className="navcontent w-3/4 h-3/4 flex justify-between items-start">
                <Navcomp compname="Home" />
                <Navcomp compname="Trends" />
                <Navcomp compname="Recommendor" />
                <Navcomp compname="Guidance" />
                <Navcomp compname="About Us" />

            </div>


        </div>
    )
}

export default navbar
