import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

// components
import Navbar from './components/navbar'
import Navigation from './components/navigation'

// pages
import ShowTables from './pages/show-table'
import FormInput from './pages/form-input'
import Login from './pages/login'

function Main () {
    const location = useLocation()

    return (
        <Box w="100vw" h="100vh" backgroundColor="#F3F3F3">
            <Navbar pathname={location.pathname}/>
            { location.pathname !== '/login' ? <Navigation/> : null }
            <Routes>
                <Route path="/" element={<FormInput/>}/>
                <Route path="/table" element={<ShowTables/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Box>    
    )
}

export default Main