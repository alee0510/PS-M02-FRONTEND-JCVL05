import React from 'react'
import { Card, Button } from 'react-bootstrap'

function UserCard (props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{ props.name.toLocaleUpperCase() }</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Role : { props.role }</Card.Subtitle>
                <Card.Subtitle>Gender : { props.gender}</Card.Subtitle>
                <Card.Link href="#">Hire Me</Card.Link>
            </Card.Body>
            <Button onClick={props.onButtonClick}>Remove Me</Button>
        </Card>
    )
}

export default UserCard