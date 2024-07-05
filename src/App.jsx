import React from 'react';
import Navbar from './Components/Navbar';
import LocomotiveScroll from 'locomotive-scroll';
import Routing from './utils/Routing';


const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className='w-full h-full bg-black text-white font-["satoshi"] '>
        <Navbar />
        <Routing/>
      </div>
    </>
  )
}

export default App