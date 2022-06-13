import './Login.css';

const Login = () => {

    return (
        <section className="login-section">
            <form method="POST"  className="login-form">
                <fieldset  className="login-fieldset">
                    <legend className="login-legend">Login Form</legend>
                    <div className="login-container">
                        <label htmlFor="email" className="login-label">Email</label>
                        <input type="text" className="login-input" placeholder='Email' id="email"/>
                    </div>
                    <div className="login-container">
                        <label htmlFor="password" className="login-label">Password</label>
                        <input type="password" className="login-input" placeholder='Password' id="password" />
                    </div>
                    <input type="submit" className="login-btn" value="Login" />
                </fieldset>
            </form>
        </section>
    )
}

export default Login;