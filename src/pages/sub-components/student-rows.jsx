import React from 'react'
import { Tr, Td, Menu, MenuButton, MenuList, MenuItem, IconButton, Input, Button } from '@chakra-ui/react'
import { ChevronDownIcon, EditIcon, DeleteIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons'

export default function StudentRows ({ 
    student, 
    index, 
    onDelete, 
    onEdit 
}) {
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

export function StudentRowsEdited ({ 
    student, 
    programTitle, 
    countryTitle, 
    onCancel, 
    nameRef, 
    emailRef, 
    onSave, 
    onProgramMenuClick, 
    onCountryMenuClick 
}) {
    return (
        <Tr>
            <Td>#</Td>
            <Td>
                <Input ref={nameRef} type="text" defaultValue={student.name}/>
            </Td>
            <Td>
                <Input ref={emailRef} type="email" defaultValue={student.email}/>
            </Td>
            <Td>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        { programTitle ? programTitle : "Programs" }
                    </MenuButton>
                    <MenuList>
                        <MenuItem value="Fullstack Web Development" onClick={onProgramMenuClick}>Fullstack Web Development</MenuItem>
                        <MenuItem value="UIUX Designer" onClick={onProgramMenuClick}>UIUX Designer</MenuItem>
                        <MenuItem value="Digital Marketing" onClick={onProgramMenuClick}>Digital Marketing</MenuItem>
                        <MenuItem value="Data Science" onClick={onProgramMenuClick}>Data Science</MenuItem>
                    </MenuList>
                </Menu>
            </Td>
            <Td>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        { countryTitle ? countryTitle : "Countries" }
                    </MenuButton>
                    <MenuList>
                        <MenuItem value="Japan" onClick={onCountryMenuClick}>Japan</MenuItem>
                        <MenuItem value="Korea" onClick={onCountryMenuClick}>Korea</MenuItem>
                        <MenuItem value="USA" onClick={onCountryMenuClick}>USA</MenuItem>
                        <MenuItem value="Russia" onClick={onCountryMenuClick}>Russia</MenuItem>
                    </MenuList>
                </Menu>
            </Td>
            <Td>
                <IconButton 
                    colorScheme="green" 
                    icon={<CheckIcon />} 
                    onClick={onSave}
                />
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