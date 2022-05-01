import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

const Register = () => {
    const navigate = useNavigate();

    const { register } =  useContext(AuthContext);

    const registerSubmitHandler =(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const confirmPass = formData.get('confirm-pass').trim();

        if(password !== confirmPass) {
            console.error('passwords don\'t match!');
            return;
        }

        if(password == '') {
            console.error('Password field is required!');
            return;
        }

        authService.register(email, password)
            .then(authData => {
                register(authData);
                navigate('/');
            })
            .catch(err => {
                console.error(err);
                return err;
            });
    }
    return (
        <section id="register-page" className="register">
            <form id="register-form" method="POST" onSubmit={registerSubmitHandler}>
                <fieldset>
                    <legend>Register Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    );
};

export default Register;