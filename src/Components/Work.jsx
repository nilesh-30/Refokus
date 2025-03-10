import React, { useState } from 'react'
import { useScroll } from "framer-motion"

const Work = () => {

  const [images, setImages] = useState([
    { url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: "50%", left: "50%", isActive: false },
    { url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "56%", left: "44%", isActive: false },
    { url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "45%", left: "52%", isActive: false },
    { url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top: "49%", left: "45%", isActive: false },
    { url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "43%", left: "43%", isActive: false },
    { url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top: "58%", left: "51%", isActive: false }
  ])

  const { scrollYProgress } = useScroll()

  scrollYProgress.on('change', (data) => {
    function imageShow(arr) {
      setImages(prev =>
        prev.map((item, index) => (
          arr.indexOf(index) === -1 ? { ...item, isActive: false } : { ...item, isActive: true }
        ))
      )
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imageShow([]);
        break;

      case 1:
        imageShow([0]);
        break;

      case 2:
        imageShow([0, 1]);
        break;

      case 3:
        imageShow([0, 1, 2]);
        break;

      case 4:
        imageShow([0, 1, 2, 3]);
        break;

      case 5:
        imageShow([0, 1, 2, 3, 4]);
        break;

      case 6:
        imageShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  })



  return (
    <div className='relative max-w-screen-xl mx-auto pt-10'>
      <h1 className='text-[37vw] font-medium leading-none tracking-tight select-none'>work</h1>
      <h1 className='text-center text-[#919191] font-normal text-lg'>Web Design, Webflow Development, Creative Development</h1>
      <div className='absolute w-full h-full top-0'>
        {images.map((elem, index) => elem.isActive && <img className='absolute -translate-x-[50%] -tanslate-y-[50%] rounded-lg w-60' src={elem.url} style={{ top: elem.top, left: elem.left }} key={index} alt="" />)}
      </div>
    </div>
  )
}

export default Work