import React, { useRef } from 'react'
import { Card, Button, Form } from 'react-bootstrap'

export default function SignUp() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const PasswordConfirmRef = useRef()
  return (
    <>
      <Card>
        <Card.Body>
        <Form >
          <Form.Group id = "email">
            <Form.Label>Email</Form.Label>
            <Form.Control type = "email" ref= {emailRef} required />
          </Form.Group>
          <Form.Group id = "password">
            <Form.Label>password</Form.Label>
            <Form.Control type = "password" ref= {passwordRef} required />
          </Form.Group>
          <Form.Group id = "Confirm Password">
            <Form.Label>password confirm</Form.Label>
            <Form.Control type = "password" ref= {PasswordConfirmRef} required />
          </Form.Group>
          <Button className='w-100' type='submit'>Sign Up</Button>
        </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Log In
      </div>
    </>
  )
}
