import React from 'react';
import mag from '../assets/mag.svg';

const Box = ({heading , subheading  , img }) => {
  return (
    <div className='w-80 h-48 bg-blue-600 rounded-3xl my-10 flex justify-evenly items-center text-white'>
      <div className='flex-col gap-10'>
        <p className='text-2xl font-extrabold'>{heading}</p>
        <h1 className='text-lg font-bold'>{subheading}</h1>
      </div>
      <img src={img} alt="" className=' h-20' />
    </div>
  );
};

export default Box;

