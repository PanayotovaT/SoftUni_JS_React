const Register = () => {

    return (
        <form action="" method="">
            <h2>Register</h2>
            <div className="on-dark">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" placeholder="Steven" />
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