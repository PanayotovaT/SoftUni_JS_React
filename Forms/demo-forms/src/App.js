import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [isValid, setIsValid] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);

    let formData = new FormData(e.currentTarget);
    let username = formData.get('username');
    let password = formData.get('password');

    console.log(username);
    console.log(password);
  }

  const onChange = (e) => {
    console.log(e.target.value);
    if(e.target.value.length < 3) {
      console.error('Too short');
      setIsValid(false)
    } else {
      setIsValid(true);
    }
  }
  return (
    <div className="App">
      <form method="POST" onSubmit={submitHandler}>
        <span className="form-span">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" defaultValue="Alex" onChange={onChange} autoComplete="off" />
          {!isValid && <span style={{color:'red'}}>This input is invalid.</span>}
        </span>
        <span className="form-span">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="assword" />
        </span>
        <span className="form-span" className="is-admin-span">
          <label htmlFor="isAdmin" className="is-admin">isAdmin</label>
          <input type="checkbox" name="isAdmin" id="isAdmin" defaultChecked />
        </span>
        <input type="submit" className="form-submit-btn" value="Submit" />

      </form>

    </div>
  );
}

export default App;
