import React from "react"
import { useNavigate } from 'react-router-dom'
import { Text, Flex, Button } from '@chakra-ui/react'

function Navbar (props) {
    const title = {
        '/' : 'Home',
        '/table' : 'Data Management',
        '/login' : 'Login'
    }
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const onButtonLogout = () => {
        localStorage.removeItem("token")
    }

    return (
        <Flex 
            w="100%" 
            h="180px" 
            px="161px" 
            paddingBottom="20px" 
            backgroundColor="#319795" 
            flexDirection="row" 
            justifyContent="space-between"
            alignItems="flex-end"
        >
            <Text fontSize="4xl" fontWeight="bold" color="#F9F9F9">
                { title[props.pathname] } 
            </Text>
            {
                token ?
                <Button onClick={onButtonLogout}>Logout</Button>
                :
                <Button onClick={() => navigate(props.pathname === '/login' ? '/' : '/login')}>
                    { props.pathname === '/login' ? 'Back to Home' : 'Login' }
                </Button>
            }
        </Flex>
    )
}

export default Navbar