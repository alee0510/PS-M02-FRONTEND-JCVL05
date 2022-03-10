import React, { useState } from 'react'
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

function Main () {
    // state
    const [users, setUsers] = useState([
        { id : 1, name : 'alvian', gender: 'male', role : 'frontend-developer' },
        { id : 2, name : 'ferdian', gender: 'male', role : 'backend-developer' },
        { id : 3, name : 'alfi', gender: 'female', role : 'UI Engineer' },
        { id : 4, name : 'hawkhing', gender: 'male', role : 'Data Scientist' },
        { id : 5, name : 'elsa', gender: 'female', role : 'Princess' }
    ])

    // procession
    const generateUserCards = () => {
        return users.map((user, index) => {
            return (
                <UserCard
                    key={user.id} 
                    name={user.name} 
                    role={user.role} 
                    gender={user.gender}
                    onButtonClick={() => onButtonRemoveMe(index)}
                />
                // props = { id : '', name : '', role : '', gender : '' }
            )
        })
    }

    // event
    const onButtonRemoveMe = (index) => {
        setUsers((prevState) => {
            let temp = [...prevState]
            temp.splice(index, 1)
            return temp
        })
    }

    return (
        <div>{ generateUserCards() }</div>    
    )
}

export default Main