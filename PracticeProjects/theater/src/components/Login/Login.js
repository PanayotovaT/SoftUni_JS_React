const Login = () => {

    return (
        <form  method="POST">
            <h2>Login</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder="Username"  />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Password"  />
            </div>

            <button class="btn" type="submit">Login</button>
        </form>
    );
}

export default Login;