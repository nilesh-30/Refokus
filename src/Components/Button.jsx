import React from 'react';
import { IoIosReturnRight } from "react-icons/io";

const Button = () => {
  return (
    <>
        <div className='flex items-center justify-between rounded-full text-black bg-zinc-100 min-w-40 px-4 py-1 h-8'>
            <span className='text-sm font-medium'>Start a Project</span>
            <IoIosReturnRight />
        </div>  
    </>
  )
}

export default Button