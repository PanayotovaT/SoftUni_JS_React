import { Form, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'

import './Login.css';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();


    //  throw new Error('Cannot Login');


    const loginSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const { email, password } = Object.fromEntries(formData);

        login(email);
        navigate('/');
    }

    return (
        <Form onSubmit={loginSubmitHandler}>
            <h3>Login Page</h3>
            <Form.Group className="mb-3 form-width" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 form-width" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" />
            </Form.Group>
            <Form.Group className="mb-3 form-width" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
}

export default Login;