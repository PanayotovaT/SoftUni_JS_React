import './Register.css';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

const Register = () => {


    return (
        <section className="register-section">
            <form className="register-form" method="POST">
                <fieldset className="register-fieldset">
                    <legend className="register-legend">Register Form</legend>
                    <div className="field">
                        <label htmlFor="first-name" className="register-label">First Name</label>
                        <input type="text" name="first-name" className="register-input" id="first-name" placeholder='First Name' />
                    </div>
                    <div className="field">
                        <label htmlFor="last-name" className="register-label">Last Name</label>
                        <input type="text" name="last-name" className="register-input" id="last-name" placeholder='Last Name' />
                    </div>
                    <div className="field">
                        <label htmlFor="email" className="register-label">Email</label>
                        <input type="text" name="email" className="register-input" id="email" placeholder='Email...' />
                    </div>
                    <div className="field">
                        <label htmlFor="password" className="register-label">Password</label>
                        <input type="password" name="password" className="register-input" id="password" placeholder='Password' />
                    </div>
                    <div className="field">
                        <label htmlFor="repass" className="register-label">Repeat Password</label>
                        <input type="repass" name="repass" className="register-input" id="repass" placeholder='Repeat your password' />
                    </div>
                    <div className="field">
                        <span className="check-span">Gender: </span>
                        <label htmlFor="female" className="register-label label-check">Female</label>
                        <input type="radio" name="gender" className="check-input female" id="female" value="Female" />
                        <label htmlFor="male" className="register-label label-check">Male</label>
                        <input type="radio" name="gender" className="check-input" id="male" value="Male" />
                       
                    </div>
                    <input type="submit" className="register-btn" value="Register" />
                </fieldset>
            </form>
        </section>
    );
}

export default Register;