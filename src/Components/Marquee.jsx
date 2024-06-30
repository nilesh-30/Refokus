import React from 'react'

const Marquee = ({ imagesurl }) => {
  return (
    <div className='flex w-full gap-20 py-8 whitespace-nowrap overflow-hidden'>
        {imagesurl.map(url => <img src={url} className='flex-shrink-0 w-[6vw]' alt="" />)}
    </div>
  )
}

export default Marquee