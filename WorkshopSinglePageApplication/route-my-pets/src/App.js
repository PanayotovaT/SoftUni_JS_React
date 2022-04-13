import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as authService from './services/authService';
import Create from './components/Create/Create';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyPets from './components/MyPets/MyPets';
import Register from './components/Register/Register';
import { trusted } from 'mongoose';

function App() {
  const [userInfo, setUserInfo] = useState({ isAuthenticated: false, username: '' });

  useEffect(() => {
    let username = authService.getUser();

    setUserInfo({
      isAuthenticated: Boolean(username),
      username
    })
  }, []);

  const onLogin = (username) => {
    setUserInfo({
      isAuthenticated: true,
      username
    })
  }

  return (
    <div id="container">
      <Header {...userInfo} />

      <main id="site-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-pets" element={<MyPets />} />
          <Route path="/login" element={<Login onLoginHandler={onLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-pet" element={<Create />} />
          <Route path="/edit-pet/:petId" element={<Edit />} />
          <Route path="/pet-details/:petId" element={<Details />} />
        </Routes>
      </main>

      <footer id="site-footer">
        <p>@PetMyPet</p>
      </footer>

    </div>
  );
}

export default App;
