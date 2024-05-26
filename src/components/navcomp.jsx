import React from 'react'

const Navcomp = ({ compname }) => {
    return (
        <div className='n flex flex-col items-center justify-between h-full'>
 
            <div className="disc w-8 h-2 bg-white shadow-disc"></div>
            <div className="triangle absolute -top-6 -z-10"></div>
            <div className="name text-slate-200  capitalize text-2xl">{compname}</div>
        </div>
    )
}

export default Navcomp
