import React, { useState } from 'react'
import UserCard from './components/card'

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