import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'
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

    // get global store
    const { users } = useSelector((state) => state)
    const dispatch = useDispatch()

    console.log('users:', users)

    // keeplogin
    useEffect(() => {
        const id = localStorage.getItem("token")
        Axios.get(process.env.REACT_APP_API_URL + `/users/${id}`)
        .then((respond => {
            console.log(respond.data)
            dispatch({ type : "LOGIN", payload : respond.data })
        }))
        .catch((error) => console.log(error))
    }, [])

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