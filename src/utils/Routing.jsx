import React from 'react'
import ContactPage from '../Components/ContactPage';
import WORKS from '../Components/WORKS';
import Marquees from '../Components/Marquees';
import { Routes, Route } from 'react-router-dom';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Marquees />} />
                <Route path='/works' element={<WORKS />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </div>
    )
}

export default Routing