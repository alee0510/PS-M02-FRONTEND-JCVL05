import React, { useRef, useState } from 'react'
import Axios from 'axios'
import { useNavigate, Navigate } from 'react-router-dom'
import { Box, Input, Button, Text, Flex, Spinner, useToast } from '@chakra-ui/react'

const API_URL = process.env.REACT_APP_API_URL
function Login () {
    const username = useRef("")
    const password = useRef("")
    const [loading, setLoading] = useState(false)

    const toast = useToast()
    const navigate = useNavigate()

    const onButtonLogin = () => {
        setLoading(true)
        Axios.get(API_URL + `/users?username=${username.current.value}&password=${password.current.value}`)
        .then((respond) => {
            console.log(respond.data)
            setLoading(false)

            // if failed
            if (!respond.data.length) return toast({
                title: 'Info',
                description: "username and password doesn't found.",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })

            // set data to localstorage
            localStorage.setItem("token", respond.data[0].id)

            // if success
            toast({
                title: 'Login success',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

            // redirect to home page
            navigate('/')
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }

    // protection
    const token = localStorage.getItem("token")
    if (token) return <Navigate to="/"/>

    return (
        <Box w="100%" h="100px" paddingTop="3%">
            <Flex justifyContent="center" alignItems="center">
                <Box w="800px" py="5%" px="5%" backgroundColor="#FFFFFF" borderRadius="10px">
                    <Text marginBottom="10px">Username</Text>
                    <Input ref={username} marginBottom="10px" type="text" placeholder='firaskun'/>

                    <Text marginBottom="10px">Password</Text>
                    <Input ref={password} marginBottom="20px" type="password" placeholder="*****"/>

                    <Button 
                        colorScheme="teal" 
                        onClick={onButtonLogin}
                        disabled={loading}
                    >
                        { loading ? <Spinner size="md"/> : "Login" }
                    </Button>
                </Box>
            </Flex>
        </Box>
    )
}

export default Login