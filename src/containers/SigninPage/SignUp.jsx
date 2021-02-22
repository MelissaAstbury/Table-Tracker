import React from 'react';
import { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign Up</h2>
        </Card.Body>
        <Form>
          <Form.Group id='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' ref={emailRef} required />
          </Form.Group>
          <Form.Group id='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' ref={passwordRef} required />
          </Form.Group>
          <Form.Group id='password-confirm'>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type='password' ref={passwordConfirmRef} required />
          </Form.Group>
        </Form>
        <Button type='submit' className='w-100'>
          Sign Up
        </Button>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account? Log In
      </div>
    </>
  );
}

export default SignUp;
