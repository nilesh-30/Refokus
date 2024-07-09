import React from 'react'
import ContactPage from '../Components/ContactPage';
import WORKS from '../Components/WORKS';
import { Routes, Route } from 'react-router-dom';
import Projects from '../Components/Projects';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Projects />} />
                <Route path='/works' element={<WORKS />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </div>
    )
}

export default Routing