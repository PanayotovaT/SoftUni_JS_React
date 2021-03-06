import { useState, useEffect, useRef } from 'react';
import HobbyList from './components/HobbyList';

import './App.css';

function App() {
  const [username, setUsername] = useState('Alex');
  const [services, setServices] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const passwordRef = useRef();

  useEffect(() => {
      fetch('http://localhost:3030/jsonstore/services')
        .then(res => res.json())
        .then(result  => {
          setServices(Object.values(result));
        })
  }, [])
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
    setUsername(e.target.value);
    console.log(username);
    if(username.length < 3) {
      console.error('Too short');
      setIsValid(false)
    } else {
      setIsValid(true);
    }
  }



  const onServiceChange = (e) => {
    setUsername('');
    console.log(passwordRef.current.value);
    passwordRef.current.value ='';
  }

  return (
    <div className="App">
      {/* <form method="POST" onSubmit={submitHandler}>
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

      </form> */}
            <form method="POST" onSubmit={submitHandler}>
        <span className="form-span">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" value={username} onChange={onChange} autoComplete="off" />
          {!isValid && <span style={{color:'red'}}>This input is invalid.</span>}
        </span>
        <span className="form-span">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" ref={passwordRef} />
        </span>
        <span className="form-span span-label-services" >
          <label htmlFor="services" className="span-label">Services</label>
          <select name="services" id="services" onChange={onServiceChange}>
            {services.map(x => <option value={x._id} key={x._id}>{x.name}</option>)}
          </select>
        </span>
        <span className="form-span" className="is-admin-span">
          <label htmlFor="isAdmin" className="is-admin">isAdmin</label>
          <input type="checkbox" name="isAdmin" id="isAdmin" defaultChecked />
        </span>
        <input type="submit" className="form-submit-btn" value="Submit" />

      </form>
      < HobbyList title="My favourity hobby" />
    </div>
  );
}

export default App;
