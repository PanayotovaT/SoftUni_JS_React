import './App.css';
import { Routes, Route } from 'react-router-dom';
import {useState} from 'react';

import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import SharedTrips from './components/SharedTrips/SharedTrips';
import Details from './components/Details/Details';
import Profile from './components/Profile/Profile';
import Edit from './components/Edit/Edit';
import NotFound from './components/NotFound/NotFound';
import { AuthContext } from './contexts/AuthContext';
import Logout from './components/Logout/Logout';


function App() {
  const initialUserInfo = {
    _id: '',
    email: '',
    accessToken: ''
  }

  const [user, setUser] = useLocalStorage('user',initialUserInfo);

  const login = (authData) => {
    setUser(authData)
  }

  const logout = () => {
    setUser(initialUserInfo);
  }

  return (

    <AuthContext.Provider value={{user, login, logout}}>

      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/create" element={<Create />} />
            <Route path="/shared-trips" element={< SharedTrips />} />
            <Route path="/profile" element={< Profile />} />
            <Route path="/details/:carId" element={< Details />} />
            <Route path="/edit/:carId" element={< Edit />} />
            <Route path="/*" element={< NotFound />} />
          </Routes>
        </main>

        <footer id="sticky-footer" className="bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">Copyright &copy; Shared Trip 2021</p>
          </div>
        </footer>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
