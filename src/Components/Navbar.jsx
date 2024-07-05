import React from 'react';
import Button from './Button';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 right-0 p-7 w-full h-12 z-10 bg-black flex items-center justify-between px-20'>
            <div className="flex items-center">
                <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                {/* <div className='flex gap-14 ml-20'>
                    {["Home", "Work", "About", "News", "Careers"].map((elem, index) => (
                        <a className='font-regular text-sm flex items-center gap-1' href='#'>
                            {index === 1 && <span style={{ boxShadow: "0 0 0.25em #00FF19" }} className='inline-block w-1 h-1 bg-green-500 rounded-full'></span>}
                            {elem}
                        </a>
                    ))}
                </div> */}
                <div className='flex gap-14 ml-20 font-regular text-sm'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/works'>Work</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/news'>News</NavLink>
                    <NavLink to='/career'>Career</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
            </div>
            <Button/>
        </div>
    )
}

export default Navbar

