import { Form, Button } from 'react-bootstrap'
import './Register.css';

const Register = () => {

    return (
        <Form>
            <h3>Register Page</h3>
            <Form.Group className="mb-3 form-width" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 form-width" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3 form-width" controlId="formBasicPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
            Register
            </Button>
        </Form>
    );
}

export default Register;