import React, { useState } from 'react';
import Product from './Product';
import { motion } from 'framer-motion';
import arqitel from '../assets/arqitel.mp4';
import layout from '../assets/layout.mp4';
import TTR from '../assets/TTR.webm';
import Singularity from '../assets/Singularity.webm'
import likemagic from '../assets/likemagic.webm'
import silvr from '../assets/Silvr.webm'
import rainfall from '../assets/rainfall.webm'
import intenseys from '../assets/Intenseye.webm'
import showcase from '../assets/showcase.mp4'

const Products = () => {

    var products = [
        { title: "Arqitel", desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case: false },

        { title: "Intenseye", desc: "A brand new website for Intenseye just before their $64M Series.", live: true, case: false },

        { title: "Layout Land", desc: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.", live: true, case: false },

        { title: "TTR", desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live: true, case: false },

        { title: "Showcase", desc: "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.", live: true, case: false },

        { title: "Singularity", desc: "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.", live: true, case: false },

        { title: "Like Magic", desc: "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.", live: true, case: true },

        { title: "Silvr", desc: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.", live: true, case: false },

        { title: "Rainfall", desc: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.", live: true, case: true }
    ]

    const [pos, setPos] = useState(0);

    const mover = (val) => {
        setPos(val*23)
    }

    return (
        <div className='mt-28 relative'>
            {products.map((elem,index)=>{
                return <Product items={elem} key={index} mover={mover} count={index}/>
            })}
            <div className='absolute top-0 w-full h-full pointer-events-none'>
                <motion.div initial={{ y: pos, x: "-50%"}} animate={{ y: pos+`rem`}} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6}} className='absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden rounded-3xl'>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='w-full h-full'>
                        <video className='absolute object-cover' autoPlay muted loop src={arqitel}></video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='w-full h-full'>
                        <video className='absolute object-cover' autoPlay muted loop src={intenseys}></video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='w-full h-full'>
                        <video className='absolute object-cover' autoPlay muted loop src={layout}></video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='w-full h-full'>
                        <video className='absolute object-cover' autoPlay muted loop src={TTR}></video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='w-full h-full'>
                        <video className='absolute object-cover' autoPlay muted loop src={showcase}></video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='w-full h-full'>
                        <video className='absolute object-cover' autoPlay muted loop src={Singularity}></video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='w-full h-full'>
                        <video className='absolute object-cover' autoPlay muted loop src={likemagic}></video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='w-full h-full'>
                        <video className='absolute object-cover' autoPlay muted loop src={silvr}></video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='w-full h-full'>
                        <video className='absolute object-cover' autoPlay muted loop src={rainfall}></video>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Products