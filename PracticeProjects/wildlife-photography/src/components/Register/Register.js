const Register = () => {

    return (

        <section id="register-page">
            <div className="signupSection">
                <div className="info">
                    <h2>To discover and share knowledge about the environment in order to preserve and enrich life.</h2>
                </div>
                <form action="#" method="" className="signupForm">
                    <h2>Sign Up</h2>
                    <ul className="noBullet">
                        <li>
                            <label htmlFor="first-name">First Name:</label>
                            <input type="text" className="inputFields" id="first-name" name="name" placeholder="Alex" />
                        </li>
                        <li>
                            <label htmlFor="last-name">Last Name:</label>
                            <input type="text" className="inputFields" id="last-name" name="lastName" placeholder="Petkov" />
                        </li>
                        <li>
                            <label htmlFor="email">Email:</label>
                            <input type="text" className="inputFields" id="email" name="email" placeholder="alex@gmail.com" />
                        </li>
                        <li>
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="inputFields" id="password" name="password" placeholder="******" />
                        </li>
                        <li>
                            <label htmlFor="repeat-password">Repeat-Password:</label>
                            <input type="password" className="inputFields" id="repeat-password" name="repass" placeholder="******" />
                        </li>
                        <li id="center-btn">
                            <button id="join-btn">Join</button>
                        </li>
                    </ul>
                </form>
            </div>
        </section>

    );
}

export default Register;