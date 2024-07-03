import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from 'framer-motion';

const Card = ({ width, start, para, title, quote, hover="false" }) => {
  return (
    <motion.div whileHover={{backgroundColor: hover==="true" ? "#7443ff" : "#3E3E46", padding: "25px"}} className={`bg-[#29292E] ${width} p-5 rounded-xl min-h-[28.55rem]`}>
        <div className='flex justify-between'>
            <h1>{title}</h1>
            <IoIosArrowRoundForward  className='text-2xl'/>
        </div>
        <span className='text-3xl font-medium inline-block mt-7 w-[20vw]'>{quote}</span>

        {start && (<p className='mt-[16rem] text-zinc-400'>Explore what drives our team.</p>)}

        {para && (
            <div className='mt-28'>
                <h1 className='text-8xl font-medium py-4'>Start a Project</h1>
                <button className='rounded-full border-[2px] px-5 py-2 font-medium'>Contact Us</button>
            </div>
        )}
    </motion.div>
  )
}

export default Card