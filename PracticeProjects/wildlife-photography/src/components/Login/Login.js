import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();
    const { showNotification } = useNotificationContext();

    const loginHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)

        const email = formData.get('email');
        const password = formData.get('password');

        authService.login(email, password)
            .then(data => {
                login(data);
                showNotification('You have successfully logged in!', types.success);
                navigate('/');
            })
            .catch(err => {
                console.error(err.message);
                return;
            });

    }
    return (

        <section id="login-page">

            <div className="loginSection">
                <div className="info">
                    <h2>Welcome, again!</h2>
                    <p>View new posts.</p>
                </div>
                <form method="POST" className="loginForm" onSubmit={loginHandler}>
                    <h2>Login</h2>
                    <ul className="noBullet">
                        <li>
                            <label htmlFor="email">Email:</label>
                            <input type="text" className="inputFields" id="email" name="email" placeholder="alex@gmail.com" />
                        </li>
                        <li>
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="inputFields" id="password" name="password" placeholder="*******" />
                        </li>

                        <li id="center-btn">
                            <button id="login-btn">Login</button>
                        </li>
                    </ul>
                </form>
            </div>

        </section>

    )
}
export default Login;