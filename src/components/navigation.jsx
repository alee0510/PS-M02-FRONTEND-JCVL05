import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
    Flex, 
    Box, 
    InputGroup, 
    InputLeftElement, 
    Input, 
    Button, 
    Menu, 
    MenuList, 
    MenuButton, 
    MenuItem 
} from '@chakra-ui/react'
import { Search2Icon, ChevronDownIcon } from '@chakra-ui/icons'

export default function Navigation () {
    const location = useLocation()

    return (
        <Flex w="100%" py="20px" marginBottom="15px" px="161px" justifyContent="space-between">
            <Flex>
                <Box 
                    py="8px" 
                    px="15px" 
                    cursor="pointer"
                    borderBottom={ location.pathname === "/" ? "2px" : "0px" } 
                    borderBottomColor="#2B6CB0"
                >
                    <Link to="/">From Input</Link>
                </Box>
                <Box 
                    py="8px" 
                    px="15px" 
                    cursor="pointer" 
                    borderBottom={ location.pathname === "/table" ? "2px" : "0px" } 
                    borderBottomColor="#2B6CB0"
                >
                    <Link to="/table">Table</Link>
                </Box>
            </Flex>
            <Flex>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<Search2Icon color='gray.300' />}
                    />
                    <Input type='text' placeholder='Search' />
                </InputGroup>
                <Menu>
                    <MenuButton minW="150px" ml="10px" backgroundColor="#F9F9F9" as={Button} rightIcon={<ChevronDownIcon />}>
                        Sort By
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Name A-Z</MenuItem>
                        <MenuItem>Name Z-A</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    )
}