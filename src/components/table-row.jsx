import React from 'react'
import { Button } from 'react-bootstrap'

function TableRow (props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.country}</td>
            <td>{props.region}</td>
            <td>{props.currency}</td>
            <td>
                <Button 
                    variant='danger' 
                    // onClick={props.onButtonClick}
                >
                    Delete
                </Button>
            </td>
        </tr>
    )
}

export default TableRow