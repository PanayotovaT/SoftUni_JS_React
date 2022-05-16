import { Link } from 'react-router-dom';

const Register = () => {

    return (
<section id="register-page">
                <div className="boxs">
                    <div className="card-image">
                        <h2 className="card-heading">
                            Create your account
                        </h2>
                    </div>
                    <form className="card-form"  method="POST">
                        <div className="input">
                            <input type="text" className="input-field" placeholder="Alexander Parkinson" id="name" name="name" />
                            <label className="name">Full Name</label>
                        </div>
                        <div className="input">
                            <input type="text" className="input-field" placeholder="alexander" id="username" name="username" />
                            <label className="username">Username</label>
                        </div>
                        <div className="input">
                            <input type="password" className="input-field" id="password" name="password" placeholder="******" />
                            <label className="password">Password</label>
                        </div>
                        <div className="input">
                            <input type="password" className="input-field" id="re-password" name="repass" placeholder="******" />
                            <label className="re-password">Repeat Password</label>
                        </div>
                        <div className="action">
                            <button className="action-button">Get started</button>
                        </div>
                    </form>

                    <div className="card-info">
                        <small>Already have an account?<Link to="/login"> Sign in</Link>
                        </small>
                    </div>
                </div>
            </section>

    );
}

export default Register;