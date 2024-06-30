import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Card = ({ width, start, para, title, quote, hover}) => {
  return (
    <div className={`bg-[#29292E] hover:${hover} ${width} p-5 rounded-xl`}>
        <div className='flex justify-between'>
            <h1>{title}</h1>
            <IoIosArrowRoundForward  className='text-2xl'/>
        </div>
        <span className='text-3xl font-medium inline-block mt-7 w-[20vw]'>{quote}</span>

        {start && (<p className='mt-60 text-zinc-400'>Explore what drives our team.</p>)}

        {para && (
            <div className='mt-28'>
                <h1 className='text-8xl font-medium py-4'>Start a Project</h1>
                <button className='rounded-full border-[2px] px-5 py-2 font-medium'>Contact Us</button>
            </div>
        )}
    </div>
  )
}

export default Card