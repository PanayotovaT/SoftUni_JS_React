import { Link, useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';

const Login = () => {
    const {login} = useAuthContext();
    const navigate = useNavigate()

    const loginHandler = (e) => {
        e.preventDefault();

        const {email, password} = Object.fromEntries(new FormData(e.currentTarget));

        authService.login(email, password)
            .then(res => {

                login(res);
                navigate('/')
            })
            .catch(err => {
                console.error(err);
                return;
            })

    }


    return (
        <section id="login-page">
        <div className="boxs">
            <div className="card-image">
                <h2 className="card-heading">
                    Login
                </h2>
            </div>
            <form className="card-form"  method="POST" onSubmit={loginHandler}>

                <div className="input">
                    <input type="text" className="input-field" placeholder="alexander" id="username" name="email"  />
                    <label className="username">Email</label>
                </div>
                <div className="input">
                    <input type="password" className="input-field" id="password" name="password" placeholder="******" />
                    <label className="password">Password</label>
                </div>
                <div className="action">
                    <button className="action-button">Login</button>
                </div>
            </form>
            <div className="card-info">
                <p>Dont have an account?
                    <Link to="/register">Sign up</Link>.
                </p>
            </div>
        </div>
    </section>
    );
}

export default Login;