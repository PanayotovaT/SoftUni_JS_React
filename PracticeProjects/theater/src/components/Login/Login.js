import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();

    const loginHandler = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const email =  formData.get('email').trim();
        const password = formData.get('password').trim();

        if(email == '' || password == '') {
            console.error('All fields are requested');
            return;
        }

        authService.login(email, password)
            .then(data => {
                login(data);
                navigate('/');
            }).catch(err => {
                console.log(err.message);
                return 
            })

    }

    return (
        <form  method="POST" onSubmit={loginHandler}>
            <h2>Login</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder="Username" name="email" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Password" name="password" />
            </div>

            <button className="btn" type="submit">Login</button>
        </form>
    );
}

export default Login;