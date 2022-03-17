import React from 'react'
import { Tr, Td, Menu, MenuButton, MenuList, MenuItem, IconButton, Input, Button } from '@chakra-ui/react'
import { ChevronDownIcon, EditIcon, DeleteIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons'

export default function StudentRows ({ student, index, onDelete, onEdit }) {
    return (
        <Tr>
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
                        <MenuItem 
                            icon={<EditIcon />}
                            onClick={onEdit}
                        >
                            Edit
                        </MenuItem>
                        <MenuItem 
                            onClick={onDelete} 
                            icon={<DeleteIcon 
                        />}>
                            Delete
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Td>
        </Tr>
    )
}

export function StudentRowsEdited ({ student, onCancel }) {
    return (
        <Tr>
            <Td>#</Td>
            <Td>
                <Input type="text" defaultValue={student.name}/>
            </Td>
            <Td>
                <Input type="email" defaultValue={student.email}/>
            </Td>
            <Td>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Programs
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Fullstack Web Development</MenuItem>
                        <MenuItem>UIUX Designer</MenuItem>
                        <MenuItem>Digital Marketing</MenuItem>
                        <MenuItem>Data Science</MenuItem>
                    </MenuList>
                </Menu>
            </Td>
            <Td>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Countries
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Japan</MenuItem>
                        <MenuItem>Korea</MenuItem>
                        <MenuItem>USA</MenuItem>
                        <MenuItem>Russia</MenuItem>
                    </MenuList>
                </Menu>
            </Td>
            <Td>
                <IconButton colorScheme="green" icon={<CheckIcon />} />
                <IconButton 
                    ml="5px" 
                    colorScheme="red" 
                    icon={<CloseIcon />} 
                    onClick={onCancel}
                />
            </Td>
        </Tr>
    )
}