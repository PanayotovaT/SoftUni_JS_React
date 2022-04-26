import { Link, useNavigate} from 'react-router-dom';
import { useContext } from 'react';

import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { login } =  useContext(AuthContext);

    const loginHandler = (e) => {
        e.preventDefault();

        const formData =  new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(email, password)

        authService.login(email, password)
            .then(authData => {
                login(authData);
                console.log(authData);
                navigate('/');
            })
            .catch(err => {
                console.error(err);
                return err
            })
    }
    return (
        <section className="py-5" id="login-page">
            <div className="container login-page">
                <h1>Login</h1>
                <div className="login">
                    <form method="POST" onSubmit={loginHandler}>
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
                            <p>Not registered yet? <Link to="/register">Register Now!</Link></p>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login;