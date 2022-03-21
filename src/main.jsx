import React from 'react'
import { Routes, Route } from 'react-router-dom'

// components
import Navbar from './components/navbar'
import Navigation from './components/navigation'

// pages
import ShowTables from './pages/show-table'
import FormInput from './pages/form-input'

function Main () {
    return (
        <div>
            <Navbar/>
            <Navigation/>
            <Routes>
                <Route path="/" element={<FormInput/>}/>
                <Route path="/table" element={<ShowTables/>}/>
            </Routes>
        </div>    
    )
}

export default Main