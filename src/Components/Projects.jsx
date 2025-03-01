import React from 'react'
import Project from './Project'

const Projects = () => {

  var projects = [
    { title: "ARQITEL", desc: "", image1: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp", image2: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp", video: "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm", bgColor: "#5355EE", para: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate." },

    { title: "Cula", desc: "", image1: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204.png", image2: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png", video: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4", bgColor: "#4A576B", para: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates." },

    { title: "Webflow", desc: "", image1: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01.webp", image2: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65f1160e50447ddfb490fb59_portfolioCard_cc-02%20(1).webp", video: "https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4", bgColor: "#1626F3", para: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow." },

    {title: "SILVR", desc: "", image1: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01.jpg", image2: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc29f66c6594c072ba1a38_02.jpg", video: "https://cdn.refokus.com/website/2022/videos/Silvr.webm", bgColor: "#FF7548", para: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand."}
  ]

  return (
    <div className='w-full'>
      {projects.map((elem, index) => {
        return <Project items={elem} key={index} />
      })}
    </div>
  )
}

export default Projects
