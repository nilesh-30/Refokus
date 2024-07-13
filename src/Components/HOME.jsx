import React from 'react'
import Marquees from './Marquees'
import Stripes from './Stripes'
import Cards from './Cards'
import Projects from './Projects'
import Footer from './Footer'
import Button from './Button'
import Article from './Article'
import Arrows from './Arrows'

const HOME = () => {
  return (
    <div>
      <Arrows />
      <Marquees />
      <Projects />
      <div className='flex justify-center pt-10'>
        <Button title={"View More"} />
      </div>
      <Stripes />
      <Article />
      <Cards />
      <Footer />
    </div>
  )
}

export default HOME;