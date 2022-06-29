const Login = () => {

    return (
        <form  method="POST">
            <h2>Login</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder="Username" name="username" />
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