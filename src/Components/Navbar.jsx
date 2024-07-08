import React from 'react';
import Button from './Button';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <style>
                {`
                    .befote-content {
                        position: relative;
                    }
                        
                    .before-content::before {
                        content: '';
                        display: inline-block;
                        width: 0.3em;
                        height: 0.3em;
                        background-color: #00FF19;
                        border-radius: 50%;
                        position: relative;
                        bottom: 0.31em;
                        right: 0.25em;
                        box-shadow: 0 0 0.25em #00FF19;
                    }
                `}
            </style>

            <div className='fixed top-0 left-0 right-0 p-7 w-full h-12 z-10 bg-black flex items-center justify-between px-20'>
                <div className="flex items-center">
                    <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />

                    <div className='flex gap-14 ml-20 font-regular text-sm relative'>
                        <NavLink className='transition ease-in-out hover:font-semibold hover:scale-110 duration-300' to='/'>
                            {(e) => {
                                return (
                                    <span
                                        className={[
                                            e.isActive ? "before-content" : ""
                                        ].join(" ")}>
                                        Home</span>
                                )
                            }}
                        </NavLink>

                        <NavLink className='transition ease-in-out hover:font-semibold hover:scale-110 duration-300' to='/works'>
                            {(e) => {
                                return (
                                    <span
                                        className={[
                                            e.isActive ? "before-content" : ""
                                        ].join(" ")}>
                                        Work</span>
                                )
                            }}
                        </NavLink>

                        <NavLink className='transition ease-in-out hover:font-semibold hover:scale-110 duration-300' to='/about'>
                            {(e) => {
                                return (
                                    <span
                                        className={[
                                            e.isActive ? "before-content" : ""
                                        ].join(" ")}>
                                            About
                                        </span>
                                )
                            }}
                        </NavLink>

                        <NavLink className='transition ease-in-out hover:font-semibold hover:scale-110 duration-300' to='/news'>
                            {(e) => {
                                return (
                                    <span
                                        className={[
                                            e.isActive ? "before-content" : ""
                                        ].join(" ")}>
                                            News
                                        </span>
                                )
                            }}
                        </NavLink>

                        <NavLink className='transition ease-in-out hover:font-semibold hover:scale-110 duration-300' to='/career'>
                            {(e) => {
                                return (
                                    <span
                                        className={[
                                            e.isActive ? "before-content" : ""
                                        ].join(" ")}>
                                            Career
                                        </span>
                                )
                            }}
                        </NavLink>
                    </div>
                </div>
                <Button />
            </div>
        </>
    )
}

export default Navbar

