import React from 'react'
import Product from './Product'

const Products = () => {

    var products = [
        { title: "Arqitel", desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case: false },

        { title: "Cula", desc: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live: true, case: false },

        { title: "Layout Land", desc: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.", live: true, case: false },

        { title: "TTR", desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live: true, case: false },

        { title: "Maniv", desc: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live: true, case: false },

        { title: "Singularity", desc: "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.", live: true, case: false },

        { title: "Like Magic", desc: "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.", live: true, case: true },

        { title: "Silvr", desc: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.", live: true, case: false },

        { title: "Rainfall", desc: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.", live: true, case: true }
    ]

    return (
        <div className='mt-28 '>
            {products.map((elem,index)=>{
                return <Product items={elem}/>
            })}
            
        </div>
    )
}

export default Products