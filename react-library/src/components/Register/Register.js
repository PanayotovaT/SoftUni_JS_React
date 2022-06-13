import './Register.css';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

const Register = () => {


    return (
        <section className="register-section">
            <form className="register-form" method="POST">
                <fieldset>
                    <legend>Register Form</legend>
                    <div className="field">
                        <label htmlFor="email" className="email-label">Email</label>
                        <input type="text" name="email" className="email-input" id="email" placeholder='Email...' />
                    </div>
                    <div className="field">
                        <label htmlFor="password" className="password-label">Password</label>
                        <input type="password" name="password" className="password-input" id="password" />
                    </div>
                    <div className="field">
                        <label htmlFor="repass" className="repass-label">Repeat Password</label>
                        <input type="repass" name="repass" className="repass-input" id="repass" />
                    </div>
                    <div className="field">
                        <span className="check-span">Gender: </span>
                        <label htmlFor="female" className="label-check">Female</label>
                        <input type="radio" name="gender" className="label-input female" id="female" value="Female" />
                        <label htmlFor="male" className="label-check">Male</label>
                        <input type="radio" name="gender" className="label-input" id="male" value="Male" />
                       
                    </div>
                    <input type="submit" className="register-btn" value="Register" />
                </fieldset>
            </form>
        </section>
    );
}

export default Register;