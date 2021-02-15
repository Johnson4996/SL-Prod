import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useAuth } from './Contexts/AuthContext'

export const Dashboard = () => {

    const {logout} = useAuth()
    const [error,setError] = useState("")
    const history = useHistory()

    async function handleLogout() {
        try{
            await logout()
            history.push('/')
        }catch{
            setError('Logout Unsuccessful')
        }
    }

    return (
        <div>
            <Button variant="link" onClick={handleLogout}>Log Out</Button>
        </div>
    )
}
