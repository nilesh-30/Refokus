import React from 'react'
import { motion } from 'framer-motion'

const Stripe = ({ val }) => {
  return (
    <motion.div initial={{ x: "100" }} animate={{ x: "-100%" }} transition={{ease:"linear", repeat: Infinity, duration: 10}} className='w-[40%] h-16 px-10 py-5 border-zinc-700 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] flex items-center justify-between text-xl overflow-hidden whitespace-nowrap' >
        <img src={val.url} className='flex-shrink-0 w-26' alt="" />
        <span className='font-semibold'>{val.number}</span>
    </motion.div>

    // <div className='w-full overflow-hidden border-zinc-700 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] h-16'>
    //   <motion.div
    //     initial={{ x: "0" }}
    //     animate={{ x: "-100%"}}
    //     transition={{ ease:"linear", repeat: Infinity, duration: 10}}
    //     className='flex whitespace-nowrap'
    //   >
    //     <div className='flex items-center'>
    //       <img src={val.url} className='flex-shrink-0 w-26' alt="" />
    //       <span className='font-semibold'>{val.number}</span>
    //     </div>
    //     <div className='flex items-center'>
    //       <img src={val.url} className='flex-shrink-0 w-26' alt="" />
    //       <span className='font-semibold'>{val.number}</span>
    //     </div>
    //   </motion.div>
    // </div>


  )
}

export default Stripe