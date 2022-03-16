import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {
    Box, 
    Table, 
    Thead, 
    Tbody, 
    Tr, 
    Th, 
    Td, 
    Spinner, 
    Flex,
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { ChevronDownIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'

function ShowTables () {
    const [students, setStudent] = useState([])
    const [loading, setLoading] = useState(false)

    // side-effect
    useEffect(() => {
        setLoading(true)

        // fetch data from api/server
        Axios.get('http://localhost:2000/students')
        .then((respond) => {
            setStudent(respond.data)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }, [])

    // generate rows
    const generateStudentRows = () => {
        return students.map((student, index) => {
            return (
                <Tr key={student.id}>
                    <Td>{index + 1}</Td>
                    <Td>{student.name}</Td>
                    <Td>{student.email}</Td>
                    <Td>{student.program}</Td>
                    <Td>{student.country}</Td>
                    <Td>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<ChevronDownIcon />}
                                variant='outline'
                            />
                            <MenuList>
                                <MenuItem icon={<EditIcon />}>
                                    Edit
                                </MenuItem>
                                <MenuItem 
                                    onClick={() => onButtonDelete(student.id)} 
                                    icon={<DeleteIcon 
                                />}>
                                    Delete
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Td>
                </Tr>
            )
        })
    }

    // event
    const onButtonDelete = (id) => {
        Axios.delete(`http://localhost:2000/students/${id}`)
        .then((respond) => {
            console.log(respond.data)

            Axios.get('http://localhost:2000/students')
            .then((respond2) => {
                setStudent(respond2.data)
            })
        })
        .catch((error) => console.log(error))
    }

    return (
        <Box w="100%" px="161px">
            {
                loading ?
                <Flex w="100%" minH="500px" justifyContent="center" alignItems="center">
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='#319795'
                        size='xl'
                    />
                </Flex>
                :
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>No</Th>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Program</Th>
                            <Th>Country</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        { generateStudentRows() }
                    </Tbody>
                </Table>
            }
        </Box>
    )
}

export default ShowTables