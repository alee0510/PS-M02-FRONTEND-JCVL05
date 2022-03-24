import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Text, Flex, Button, Avatar } from '@chakra-ui/react'

function Navbar (props) {
    const title = {
        '/' : 'Home',
        '/table' : 'Data Management',
        '/login' : 'Login'
    }
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    // global store
    const username = useSelector((state) => state.users.username)
    const dispatch = useDispatch()

    const onButtonLogout = () => {
        localStorage.removeItem("token")
        dispatch({ type : "LOGOUT" })
    }

    console.log(username)
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
            <Flex alignItems="center">
                { username ? <Avatar mr="15px" name={username} size="sm"/> : null }
                {
                    token ?
                    <Button onClick={onButtonLogout}>Logout</Button>
                    :
                    <Button onClick={() => navigate(props.pathname === '/login' ? '/' : '/login')}>
                        { props.pathname === '/login' ? 'Back to Home' : 'Login' }
                    </Button>
                }
            </Flex>
        </Flex>
    )
}

export default Navbar