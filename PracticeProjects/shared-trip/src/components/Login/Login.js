import { Link} from 'react-router-dom';

const Login = () => {

    return (
        <section className="py-5" id="login-page">
            <div className="container login-page">
                <h1>Login</h1>
                <div className="login">
                    <form method="POST">
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