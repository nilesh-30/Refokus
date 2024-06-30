import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='max-w-screen-xl mx-auto pt-20 flex gap-1'>
        <Card width={"basis-1/3"} start={true} para={false} title={"Up Next: News"} quote={"Insights and behind the scenes"} hover={"bg-zinc-800"}/>
        <Card width={"basis-2/3"} start={false} para={true} title={"Get in Touch"} quote={"Let's get to it, together."} hover={"bg-violet-600"} />
    </div>
  )
}

export default Cards