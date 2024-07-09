import React from 'react'
import Button from './Button'

const Project = ({ items }) => {
    return (
        <div className='max-w-screen-xl mx-auto mt-20 rounded-2xl my-4'>
            <div className='p-4 flex gap-3'>
                <div className='w-[50%]'>
                    <h1 className='text-[2vw] font-medium'>ARQITEL</h1>
                    <div className='flex flex-col items-end'>
                        <img className='w-80 h-64 rounded-xl mb-5' src={items.image1} alt="" />
                        <img className='rounded-xl' src={items.image2} alt="" />
                    </div>
                </div>

                <div className='w-[50%]'>
                    <video className='rounded-xl mb-10' autoPlay muted loop src={items.video}></video>

                    <div className='px-8'>
                        <h5 className='mb-3 text-sm font-normal'>Concept, Design, 3D, Webflow+WebGL Development</h5>
                        <p className='mb-4 font-medium text-xl'>With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.</p>
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project