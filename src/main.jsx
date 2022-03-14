import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Table } from 'react-bootstrap'
import TableRow from './components/table-row'

function Main () {
    // state
    const [users, setUsers] = useState([])

    // life-cylcle method
    useEffect(() => {
       // req to server
       Axios.get('http://localhost:2000/users')
       .then((respond) => {
           setUsers(respond.data)
        })
       .catch((error) => console.log(error))
    }, [])


    const generateTableRows = () => {
        return users.map((user, index) => {
            return (
                <TableRow
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                    country={user.country}
                    region={user.region}
                    currency={user.currency}
                />
            )
        })
    }

    console.log('users', users)
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Country</th>
                        <th>Region</th>
                        <th>Currency</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{ generateTableRows() }</tbody>
            </Table>
        </div>    
    )
}

export default Main