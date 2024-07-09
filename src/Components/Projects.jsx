import React from 'react'
import Project from './Project'

const Projects = () => {

    var projects = [
        {title:"", desc:"",image1:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp", image2:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp", video:"https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm", bgColor:"#5355EE"},

        {title:"", desc:"",image1:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204.png", image2:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png", video:"https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4", bgColor: "#4A576B"},

        {title:"", desc:"",image1:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01.webp", image2:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65f1160e50447ddfb490fb59_portfolioCard_cc-02%20(1).webp", video:"https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4", bgColor:"#1626F3"}
    ]

  return (
    <div className='w-full'>
        {projects.map((elem,index)=>{
            return <Project items={elem} key={index}/>
        })}
    </div>
  )
}

export default Projects