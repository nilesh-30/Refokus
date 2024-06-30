import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[40%] h-16 px-10 py-5 border-zinc-700 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] flex items-center justify-between text-xl overflow-hidden whitespace-nowrap' >
        <img src={val.url} className='flex-shrink-0 w-26' alt="" />
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe