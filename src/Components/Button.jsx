import React from 'react';
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title="Start a Project"}) => {
  return (
    <>
        <div className='flex items-center justify-between rounded-full text-black bg-zinc-100 gap-2 px-4 py-1 h-8 max-w-40 cursor-pointer'>
            <p className='text-sm font-medium'>{title}</p>
            <IoIosReturnRight />
        </div>  
    </>
  )
}

export default Button