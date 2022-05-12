const Login  = () => {
    return(
        
        <section id="login-page">

        <div className="loginSection">
            <div className="info">
                <h2>Welcome, again!</h2>
                <p>View new posts.</p>
            </div>
            <form  method="POST" className="loginForm">
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