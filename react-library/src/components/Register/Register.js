import './Register.css';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

const Register = () => {


    return (
        <>
        <form className="register-form" method="POST">
        <fieldset>
           <legend>Register Form</legend>
        </fieldset>
            <div className="field">
                <label htmlFor="email" className="email-label">Email</label>
                <input type="text" name="email" className="email-input" id="email" placeholder='Email...'/>
            </div>
            <div className="field">
                <label htmlFor="password" className="password-label">Password</label>
                <input type="password" name="password" className="password-input" id="password" />
            </div>
            <div className="field">
                <label htmlFor="repass" className="repass-label">Repeat Password</label>
                <input type="repass" name="repass" className="repass-input" id="repass" />
            </div>
            <input type="submit" className="register-btn" value="Register" />
        </form>
        </>
    );
}

export default Register;