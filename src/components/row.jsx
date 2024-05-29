import React from 'react'

import g from '../assets/g.svg';
const row = ({srno,feild,no_ofjobs,avgsalary = "N/A"}) => {
  return (
    <div className='w-full h-16 bg-blue-900 text-yellow-200 text-2xl'>
      <div className='w-full h-14 flex justify-center'>
          <ul className='w-full h-full bg-inherit flex justify-between text-white items-center  list-none text-xl'>
            
            <li className='w-1/4 text-center'>{srno}</li>
            <li className='w-1/4 text-center'>{feild}</li>
            <li className='w-1/4 text-center'>{no_ofjobs}</li>
            <li className='w-1/4 text-center'>{avgsalary}</li>
            <li className='w-1/4 text-center'><button className='rounded-full bg-green-500 border-2 p-2'><img src={g} alt="" /></button></li>
          </ul>
        </div> 
    </div>
  )
}

export default row
