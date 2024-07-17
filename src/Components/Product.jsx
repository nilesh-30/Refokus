import React from 'react'
import Button from './Button'

const Product = ({ items, mover, count }) => {
  return (
    <div onMouseEnter={()=>mover(count)} className='max-w-screen-xl mx-auto flex items-center justify-between h-[23rem] '>
        <h1 className='text-6xl font-medium'>{items.title}</h1>
        <div className='w-1/3'>
            <p className='mb-10 leading-7 w-[80%]'>{items.desc}</p>
            <div className='flex gap-5'>
                {items.live && <Button title={"Live Website"}/>}
                {items.case && <Button title={"Case Study"}/>}
            </div>
        </div>
    </div>
  )
}

export default Product