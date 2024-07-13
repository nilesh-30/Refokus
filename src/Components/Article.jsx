import React from 'react'
import { IoIosReturnRight } from 'react-icons/io'

const Article = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto py-48 pb-'>
                <div className='flex '>
                    <div className='z-10'>
                        <h1 className='font-medium text-[10rem] flex flex-col tracking-light leading-[9rem]'>Forward
                            <span className='pl-[6rem] pb-20'>Thinking</span>
                        </h1>
                        <div className='pl-16'>
                            <p className='pb-10 font-normal text-lg tracking-light w-96'>Redefining the creative world with design, innovation, and forward-thinking as a leading Webflow Agency.</p>
                            <div className='flex items-center justify-between rounded-full border-zinc-100 border-[1px] text-zinc-100 gap-2 px-4 py-1 h-10 max-w-44'>
                                <span className='text-base font-medium'>News & Insight</span>
                                <IoIosReturnRight />
                            </div>
                        </div>
                    </div>
                    <div className='w-[47.5rem] ml-[-4rem]'>
                        <video className='rounded-2xl w-full' autoPlay loop muted src="https://cdn.refokus.com/website/people-short.webm"></video>
                        <p className='font-medium text-xl pt-10'>Refokus 2022 Offsite: Where Work Meets Play, Innovation, and Homemade Pasta.</p>
                    </div>
                </div>
                
                <div className='flex'>
                    <div>
                        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65493e5d5a9929dadf061029_Rectangle%2015006.webp" alt="" />
                        <p>Why Refokus is the Best Partner to Build Your Venture Capital Website</p>
                    </div>
                    <div>
                        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/661c1b5fd7aa742286c16467_webflow%20refokus%20(1).png" alt="" />
                        <p>Webflow Agency Case Study of Refokus as a leading Webflow Enterprise Partner</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article