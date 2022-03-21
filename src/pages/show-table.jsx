import React, { useEffect, useState, useRef } from 'react'
import Axios from 'axios'
import {
    Box, 
    Table, 
    Thead, 
    Tbody, 
    Tr, 
    Th
} from '@chakra-ui/react'

// components
import Loading from '../components/loading'
import Confirmation from '../components/confirmation'
import StudentRows, { StudentRowsEdited } from './sub-components/student-rows'

function ShowTables () {
    const [students, setStudent] = useState([])
    const [loading, setLoading] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [editConfirm, setEditConfirm] = useState(false)
    const [id, setId] = useState(null)

    // edited state
    const studentNameRef = useRef("")
    const studentEmailRef = useRef("")
    const [program, setProgram] = useState("")
    const [country, setCountry] = useState("")

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
            if (student.id === id) {
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
        
        Axios.delete(`http://localhost:2000/students/${id}`)
        .then((respond) => {
            console.log(respond.data)

            Axios.get('http://localhost:2000/students')
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
        setId(id)
        setProgram(program)
        setCountry(country)
    }

    const onButtonCancelEdit = () => setId(null)
    const onProgramMenuClick = (event) => setProgram(event.target.value)
    const onCountryMenuClick = (event) => setCountry(event.target.value)
    const onButtonSaveEdit = () => setEditConfirm(true)
    const onButtonCancelConfirmEdit = () => setEditConfirm(false)

    const onButtonConfirmEdit = () => {
        const newEditedData = {
            id : id,
            name : studentNameRef.current.value,
            email : studentEmailRef.current.value,
            program : program,
            country : country
        }
        
        setEditConfirm(false)
        setLoading(true)
        setProgram("")
        setCountry("")

        Axios.put(`http://localhost:2000/students/${id}`, newEditedData)
        .then((respond) => {
            console.log(respond.data)

            Axios.get('http://localhost:2000/students')
            .then((respond2) => {
                setStudent(respond2.data)
                setId(null)
                setLoading(false)
            })
        })
        .catch((error) => {
            console.log(error)
            setId(null)
            setLoading(false)
        })
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
        </Box>
    )
}

export default ShowTables