import React, { useEffect, useState, useRef } from 'react'
import Axios from 'axios'
import {
    Box, 
    Table, 
    Thead, 
    Tbody, 
    Tr, 
    Th,
    Flex,
    IconButton,
    Text
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

// components
import Loading from '../components/loading'
import Confirmation from '../components/confirmation'
import StudentRows, { StudentRowsEdited } from './sub-components/student-rows'
const API_URL = process.env.REACT_APP_API_URL

function ShowTables () {
    const [students, setStudent] = useState([])
    const [loading, setLoading] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [editConfirm, setEditConfirm] = useState(false)
    const [id, setId] = useState(null)
    const [editId, setEditId] = useState(null)
    const [page, setPage] = useState(1)

    // edited state
    const studentNameRef = useRef("")
    const studentEmailRef = useRef("")
    const [program, setProgram] = useState("")
    const [country, setCountry] = useState("")

    // side-effect
    useEffect(() => {
        setLoading(true)

        // fetch data from api/server
        Axios.get(API_URL + `/students?_page=${page}&_limit=5`)
        .then((respond) => {
            setStudent(respond.data)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }, [page])

    // generate rows
    const generateStudentRows = () => {
        return students.map((student, index) => {
            if (student.id === editId) {
                return (
                    <StudentRowsEdited
                        key={student.id}
                        student={student}
                        programTitle={program}
                        countryTitle={country}
                        onCancel={onButtonCancelEdit}
                        nameRef={studentNameRef}
                        emailRef={studentEmailRef}
                        onSave={onButtonSaveEdit}
                        onProgramMenuClick={onProgramMenuClick}
                        onCountryMenuClick={onCountryMenuClick}
                    />
                )
            } else {
                return (
                    <StudentRows
                        key={student.id}
                        student={student}
                        index={index}
                        onDelete={() => onButtonDelete(student.id)}
                        onEdit={() => onButtonEdit(student.id, student.program, student.country)}
                    />
                )
            }
        })
    }

    // event
    const onButtonDelete = (id) => {
        setConfirm(true)
        setId(id)
    }

    const onButtonCancelDelete = () => {
        setConfirm(false)
        setId(null)
    }

    const onButtonConfirmDelete = () => {
        setConfirm(false)
        setLoading(true)
        
        Axios.delete(API_URL + `/students/${id}`)
        .then((respond) => {
            console.log(respond.data)

            Axios.get(API_URL + '/students')
            .then((respond2) => {
                setStudent(respond2.data)
                setLoading(false)
                setId(null)
            })
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
            setId(null)
        })
    }

    const onButtonEdit = (id, program, country) => {
        setEditId(id)
        setProgram(program)
        setCountry(country)
    }

    const onButtonCancelEdit = () => setEditId(null)
    const onProgramMenuClick = (event) => setProgram(event.target.value)
    const onCountryMenuClick = (event) => setCountry(event.target.value)
    const onButtonSaveEdit = () => setEditConfirm(true)
    const onButtonCancelConfirmEdit = () => setEditConfirm(false)

    const onButtonConfirmEdit = () => {
        const newEditedData = {
            id : editId,
            name : studentNameRef.current.value,
            email : studentEmailRef.current.value,
            program : program,
            country : country
        }
        
        setEditConfirm(false)
        setLoading(true)
        setProgram("")
        setCountry("")

        Axios.put(API_URL + `/students/${id}`, newEditedData)
        .then((respond) => {
            console.log(respond.data)

            Axios.get(API_URL + '/students')
            .then((respond2) => {
                setStudent(respond2.data)
                setEditId(null)
                setLoading(false)
            })
        })
        .catch((error) => {
            console.log(error)
            setEditId(null)
            setLoading(false)
        })
    }

    const onButtonNext = () => setPage((prev) => prev + 1)
    const onButtonPrev = () => {
        if (page <= 1) return

        setPage((prev) => prev - 1)
    }

    return (
        <Box w="100%" px="161px">
            <Loading onLoading={loading}/>
            <Confirmation
                isOpen={confirm}
                title="Delete Confirmation"
                onButtonCancel={onButtonCancelDelete}
                onButtonConfirm={onButtonConfirmDelete}
            />
            <Confirmation
                isOpen={editConfirm}
                title="Edit Confirmation"
                onButtonCancel={onButtonCancelConfirmEdit}
                onButtonConfirm={onButtonConfirmEdit}
            />
            <Table variant='simple' minH="380px">
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
            <Flex alignItems="center" marginY="10px">
                <IconButton
                    icon={<ChevronLeftIcon />} 
                    onClick={onButtonPrev}
                    disabled={page <= 1}
                />
                <Text fontSize="16px" marginX="20px">page : {page}</Text>
                <IconButton
                    icon={<ChevronRightIcon />} 
                    onClick={onButtonNext}
                />
            </Flex>
        </Box>
    )
}

export default ShowTables