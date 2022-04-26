import { Link } from 'react-router-dom';

const Register = () => {

    const registerHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const email =  formData.get('email').trim();
        const password =  formData.get('password').trim();
        const repass =  formData.get('repass').trim();
        

    }

    return (
        <section className="py-5" id="register-page">
        <div className="container register-page">
            <h1>Register</h1>
            <div className="register">
                <form  method="POST" onSubmit={registerHandler}>
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
                        <label htmlFor="rePassword">Re-Password</label>
                        <input type="password" className="form-control" id="rePassword" placeholder="Re-Password"
                            name="repass"  />
                    </div>
                    <label>Gender</label>
                    <div className="gender">
                        <input type="radio" id="female" name="gender"  />
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="male" name="gender" defaultChecked />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div className="form-group">
                        <p>Already have account? <Link to="/register">Login Now!</Link></p>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </section>
    )
}

export default Register