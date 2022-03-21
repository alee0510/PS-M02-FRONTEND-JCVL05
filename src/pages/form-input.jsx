import React from 'react'
import { Box, Text, Input, Button, Menu, MenuButton, MenuList, MenuItem, Stack } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

function FormInput () {
    return (
        <Box w="100%" py="20px" px="161px">
            <Stack spacing="6" width="50%">
                <Text>Name</Text>
                <Input type="text" placeholder="ex. firas kun"/>
                
                <Text>Email</Text>
                <Input type="email" placeholder="ex. firas.kun@gmail.com"/>
                
                <Text>Programs</Text>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Fullstack Web Development
                    </MenuButton>
                    <MenuList>
                        <MenuItem value="Fullstack Web Development" >Fullstack Web Development</MenuItem>
                        <MenuItem value="UIUX Designer" >UIUX Designer</MenuItem>
                        <MenuItem value="Digital Marketing" >Digital Marketing</MenuItem>
                        <MenuItem value="Data Science" >Data Science</MenuItem>
                    </MenuList>
                </Menu>
                
                <Text>Countries</Text>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Japan
                    </MenuButton>
                    <MenuList>
                        <MenuItem value="Japan" >Japan</MenuItem>
                        <MenuItem value="Korea" >Korea</MenuItem>
                        <MenuItem value="USA" >USA</MenuItem>
                        <MenuItem value="Russia" >Russia</MenuItem>
                    </MenuList>
                </Menu>
                <Button width="150px" colorScheme="teal">Submit</Button>
            </Stack>
        </Box>
    )
}

export default FormInput