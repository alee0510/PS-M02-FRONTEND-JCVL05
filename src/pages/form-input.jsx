import React, { useRef, useState } from 'react'
import Axios from 'axios'
import { 
    Box, 
    Text, 
    Input, 
    Button, 
    Menu, 
    MenuButton, 
    MenuList, 
    MenuItem, 
    Flex,
    Spinner,
    useToast 
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
const API_URL = process.env.REACT_APP_API_URL

function FormInput () {
    const name = useRef("")
    const email = useRef("")
    const [program, setProgram] = useState("Fullstack Web Development")
    const [country, setCountry] = useState("Japan")
    const [loading, setLoading] = useState(false)

    // hooks
    const toast = useToast()

    // event
    const onProgramClick = (event) => setProgram(event.target.value)
    const onCountryClick = (event) => setCountry(event.target.value)
    const onButtonSubmit = () => {
        // check input => name & email cannot be empty string ""
        if (name.current.value === "" || email.current.value === "") {
            return toast({
                title: 'Warning',
                description: "Name and email cannot be empty",
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })
        }

        const newStudent = {
            name : name.current.value,
            email : email.current.value,
            program : program,
            country : country
        }
        setLoading(true)
        Axios.post(API_URL + '/students', newStudent)
        .then((respond) => {
            console.log(respond.data)

            // reset state & value
            setProgram("Fullstack Web Development")
            setCountry("Japan")
            name.current.value = ""
            email.current.value = ""
            setLoading(false)

            return toast({
                title: 'Info',
                description: "Data has been successfully added.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }


    return (
        <Box w="100%" px="161px">
            <Flex flexDirection="column" w="30%">
                <Text marginBottom="10px">Name</Text>
                <Input ref={name} type="text" placeholder="ex. firas kun" marginBottom="10px"/>
                
                <Text marginBottom="10px">Email</Text>
                <Input ref={email} type="email" placeholder="ex. firas.kun@gmail.com" marginBottom="10px"/>
                
                <Text marginBottom="10px">Programs</Text>
                <Menu>
                    <MenuButton marginBottom="10px" textAlign="left" as={Button} rightIcon={<ChevronDownIcon />}>
                        { program }
                    </MenuButton>
                    <MenuList>
                        <MenuItem value="Fullstack Web Development" onClick={onProgramClick} >Fullstack Web Development</MenuItem>
                        <MenuItem value="UIUX Designer" onClick={onProgramClick}>UIUX Designer</MenuItem>
                        <MenuItem value="Digital Marketing" onClick={onProgramClick}>Digital Marketing</MenuItem>
                        <MenuItem value="Data Science" onClick={onProgramClick}>Data Science</MenuItem>
                    </MenuList>
                </Menu>
                
                <Text marginBottom="10px">Countries</Text>
                <Menu>
                    <MenuButton marginBottom="20px" textAlign="left" as={Button} rightIcon={<ChevronDownIcon />}>
                        { country }
                    </MenuButton>
                    <MenuList>
                        <MenuItem value="Japan" onClick={onCountryClick}>Japan</MenuItem>
                        <MenuItem value="Korea" onClick={onCountryClick}>Korea</MenuItem>
                        <MenuItem value="USA" onClick={onCountryClick}>USA</MenuItem>
                        <MenuItem value="Russia" onClick={onCountryClick}>Russia</MenuItem>
                    </MenuList>
                </Menu>
                <Button 
                    disabled={loading} 
                    width="150px" 
                    colorScheme="teal" 
                    onClick={onButtonSubmit}
                >
                    { loading ? <Spinner size='md' /> : "Submit"}
                </Button>
            </Flex>
        </Box>
    )
}

export default FormInput