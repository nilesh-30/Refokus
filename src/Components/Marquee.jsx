import React from 'react'
import { motion } from 'framer-motion'

const Marquee = ({ imagesurl, direction }) => {

  const maskStyle = {
    WebkitMaskImage: 'linear-gradient(90deg, transparent, white 40%, white 80%, transparent)',
    maskImage: 'linear-gradient(90deg, transparent, white 40%, white 80%, transparent)',
  };
  return (
    <div className='flex w-full overflow-hidden' style={maskStyle}>
      <motion.div initial={{ x: direction === "left" ? "0" : "-100%" }} animate={{ x: direction === "left" ? "-100%" : "0" }} transition={{ ease: "linear", duration: 36, repeat: Infinity }} className='flex flex-shrink-0 gap-40 py-7 pr-40'>
        {imagesurl.map((url, index) => <img key={index} src={url} className='w-[6.5vw]' alt="" />)}
      </motion.div>
      
      <motion.div initial={{ x: direction === "left" ? "0" : "-100%" }} animate={{ x: direction === "left" ? "-100%" : "0" }} transition={{ ease: "linear", duration: 36, repeat: Infinity }} className='flex flex-shrink-0 gap-40 py-7 pr-40'>
        {imagesurl.map((url, index) => <img key={index} src={url} className='w-[6.5vw]' alt="" />)}
      </motion.div>
    </div>

  )
}

export default Marquee