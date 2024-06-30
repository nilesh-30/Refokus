import React from 'react'
import Button from './Button'

const Product = ({ items }) => {
  return (
    <div className='max-w-screen-xl mx-auto flex items-center justify-between py-10'>
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