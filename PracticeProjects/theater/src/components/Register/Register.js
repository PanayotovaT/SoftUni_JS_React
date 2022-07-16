import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

const Register = () => {
    const navigate= useNavigate();
    const { login} = useAuthContext();

    const registerHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('repass').trim();
        console.log(email, password, repass);
        if(email == '' || password == '') {
            console.error('All fields are required');
            return
        }

        if(password !== repass) {
            console.error('Passwords don\'t match!');
            return
        }

        authService.register(email, password)
            .then(data => {
                login(data);
                navigate('/');
            }).catch(err => {
                console.error(err.message);
                return;
            })
    }

    return (
        <form method="POST" onSubmit={registerHandler}>
            <h2>Register</h2>
            <div className="on-dark">
                <label htmlFor="username">Username:</label>
                <input type="text" name="email" placeholder="Steven" />
            </div>

            <div className="on-dark">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="********"  />
            </div>

            <div className="on-dark">
                <label htmlFor="repeatPassword">Repeat Password:</label>
                <input type="password" name="repass" placeholder="********"  />
            </div>

            <button className="btn" type="submit" >Register</button>
        </form>
    );
}

export default Register;