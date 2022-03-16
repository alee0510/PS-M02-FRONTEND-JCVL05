import React from "react"
import { Box, Text, Flex } from '@chakra-ui/react'

function Navbar () {
    return (
        <Flex w="100%" h="180px" px="161px" paddingBottom="20px" backgroundColor="#319795" flexDirection="column" justifyContent="flex-end">
            <Text fontSize="4xl" fontWeight="bold" color="#F9F9F9">Data Management</Text>
        </Flex>
    )
}

export default Navbar