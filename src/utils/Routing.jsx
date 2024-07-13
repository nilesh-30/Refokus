import React from 'react'
import ContactPage from '../Components/ContactPage';
import WORKS from '../Components/WORKS';
import { Routes, Route } from 'react-router-dom';
import HOME from '../Components/HOME';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HOME />} />
                <Route path='/works' element={<WORKS />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </div>
    )
}

export default Routing