import React, { useEffect, useState } from 'react'
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
    const [id, setId] = useState(null)

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
                        onCancel={onButtonCancelEdit}
                    />
                )
            } else {
                return (
                    <StudentRows
                        key={student.id}
                        student={student}
                        index={index}
                        onDelete={() => onButtonDelete(student.id)}
                        onEdit={() => onButtonEdit(student.id) }
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

    const onButtonEdit = (id) => {
        setId(id)
    }

    const onButtonCancelEdit = () => {
        setId(null)
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