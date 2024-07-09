import React from 'react';
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title="Start a Project"}) => {
  return (
    <>
        <div className='flex items-center justify-between rounded-full text-black bg-zinc-100 gap-2 px-4 py-1 h-8 max-w-40'>
            <span className='text-sm font-medium'>{title}</span>
            <IoIosReturnRight />
        </div>  
    </>
  )
}

export default Button