import { Link, useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';

const Register = () => {
    const { login } = useAuthContext();
    const navigate  = useNavigate();

    const registerHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const {name, email, password, repass} = Object.fromEntries(formData);

        if(name == '' || email == '' || password == '') {
            console.error('All fields are required!');
            return;
        }

        if(password !== repass) {
            console.error('Passwords don\'t match!');
            return;
        }

        authService.register(name, email, password)
            .then(res => {
                console.log(res);
                login(res);

                navigate('/');
            })
            .catch(err => {
                console.log(err);
                return;
            })
    }

    return (
        <section id="register-page">
            <div className="boxs">
                <div className="card-image">
                    <h2 className="card-heading">
                        Create your account
                    </h2>
                </div>
                <form className="card-form" method="POST" onSubmit={registerHandler}>
                    <div className="input">
                        <input type="text" className="input-field" placeholder="Alexander Parkinson" id="name" name="name" />
                        <label className="name">Full Name</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-field" placeholder="alexander" id="username" name="email" />
                        <label className="username">Email</label>
                    </div>
                    <div className="input">
                        <input type="password" className="input-field" id="password" name="password" placeholder="******" />
                        <label className="password">Password</label>
                    </div>
                    <div className="input">
                        <input type="password" className="input-field" id="re-password" name="repass" placeholder="******" />
                        <label className="re-password">Repeat Password</label>
                    </div>
                    <div className="action">
                        <button className="action-button">Get started</button>
                    </div>
                </form>

                <div className="card-info">
                    <small>Already have an account?<Link to="/login"> Sign in</Link>
                    </small>
                </div>
            </div>
        </section>

    );
}

export default Register;