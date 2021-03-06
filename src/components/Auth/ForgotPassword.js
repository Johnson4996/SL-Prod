import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { useAuth } from "../Contexts/AuthContext"
import "./main.css"

export const ForgotPassword = () => {
    const emailRef= useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e){
        e.preventDefault()

       
        try{
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for password reset instructions")
 

        }catch{
            setError('No user with this email')
        }
        setLoading(false)
    }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Reset Password</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
            
            <Form className="sign-up-form" onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required/>
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                    Change Password
                </Button>
            </Form>

            <div className="w-100 text-center mt-3">
                <Link to="/login">Back to Login</Link>
            </div>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign up</Link>
        </div>
        </>
    );
};
