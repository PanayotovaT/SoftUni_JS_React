import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);



    const registerHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('repass').trim();

  
        const gender = formData.get('gender');
        if (password == '' || email == '') {
            console.error('Password amd email fields are required!');
            return;
        }
        if (password !== repass) {
            console.error('Passwords don\'t match!');
            return;
        }
        authService.register(email, password, gender)
            .then(authData => {

                login(authData);
                navigate('/')
            })
            .catch(err => {
                console.error(err);
                return;
            });


    }

    return (
        <section className="py-5" id="register-page">
            <div className="container register-page">
                <h1>Register</h1>
                <div className="register">
                    <form method="POST" onSubmit={registerHandler}>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter email" name="email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" name="password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rePassword">Re-Password</label>
                            <input type="password" className="form-control" id="rePassword" placeholder="Re-Password"
                                name="repass" />
                        </div>
                        <label>Gender</label>
                        <div className="gender" >
                            <input type="radio" id="female" name="gender" value="female" />
                            <label htmlFor="female">Female</label>
                            <input type="radio" id="male" name="gender" value="male" defaultChecked />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="form-group">
                            <p>Already have account? <Link to="/register">Login Now!</Link></p>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register