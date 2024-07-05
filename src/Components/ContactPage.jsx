import React from 'react'
import { IoIosReturnRight } from 'react-icons/io'
import Marquees from './Marquees'
import Footer from './Footer'

const ContactPage = () => {
    return (
        <>
            <div className='max-w-screen-xl mx-auto pt-44'>
                <div className='flex justify-between'>
                    <div className=' w-2/3'>
                        <div className='mb-24'>
                            <h1 className='uppercase text-8xl font-medium '>Don't be shy with us</h1>
                            <p className='w-80 pt-24 pb-5'>Don't like forms? Well, too bad! This one is connected to our CRM and makes everything easier. Ok ok... here we go:</p>
                            <div className='flex items-center justify-between rounded-full border-zinc-100 border-[1px] text-zinc-100 gap-2 px-4 py-1 h-8 max-w-44'>
                                <IoIosReturnRight />
                                <span className='text-sm font-medium'>hello@refokus.com</span>
                            </div>
                        </div>
                    </div>

                    <div className='w-1/3'>
                        <form>
                            <div className='bg-[#0F0F0F] p-6 rounded-xl'>
                                <div className='flex justify-evenly pb-5'>
                                    <div className="1">
                                        <label className='text-sm font-regular text-[#C9C9CF]'>Full Name</label>
                                        <input className='rounded-lg bg-[#323238] h-11' type="text" />
                                    </div>
                                    <div className="2">
                                        <label className='text-sm font-regular text-[#C9C9CF]'>Company</label>
                                        <input className='rounded-lg bg-[#323238] h-11' type="text" />
                                    </div>
                                </div>
                                <div className='pb-5 flex flex-col'>
                                    <label className='text-sm font-regular text-[#C9C9CF]'>Email Address</label>
                                    <input className='rounded-lg bg-[#323238] h-11' type="email" />
                                </div>
                                <div className='pb-5 flex flex-col'>
                                    <label className='text-sm font-regular text-[#C9C9CF]'>Your budget</label>
                                    <input className='rounded-lg bg-[#323238] h-11' type="option" />
                                </div>
                                <div className='pb-5 flex flex-col'>
                                    <label className='text-sm font-regular text-[#C9C9CF]'>What's on your mind</label>
                                    <textarea className='rounded-lg bg-[#323238] h-[71px]'></textarea>
                                </div>
                                <button className='border-[1px] border-zinc-100 text-zinc-100 rounded-full px-4 py-2'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Marquees/>
            <Footer />
        </>

    )
}

export default ContactPage