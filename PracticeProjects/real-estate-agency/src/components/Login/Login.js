import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <section id="login-page">
        <div className="boxs">
            <div className="card-image">
                <h2 className="card-heading">
                    Login
                </h2>
            </div>
            <form className="card-form"  method="POST">

                <div className="input">
                    <input type="text" className="input-field" placeholder="alexander" id="username" name="username"  />
                    <label className="username">Username</label>
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