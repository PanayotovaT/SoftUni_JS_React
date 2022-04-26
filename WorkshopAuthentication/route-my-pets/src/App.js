import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import useLocalStorage from './hooks/useLocalStorage';
import { AuthContext } from './contexts/AuthContext';
import Create from './components/Create/Create';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyPets from './components/MyPets/MyPets';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';

function App() {
  const initialAuthState = {
    _id: '',
    email: '',
    accessToken: ''
  }

  const [user, setUser] = useLocalStorage('user', initialAuthState );

  const login = (authData) => {
    setUser(authData);
  }

  const register = (authData) => {
    setUser(authData);
  }

  const logout = () => {
    setUser(initialAuthState);
  }
  return (
    <AuthContext.Provider value={{user, login, register, logout}}>

    <div id="container">
      <Header />

      <main id="site-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/my-pets" element={<MyPets />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-pet" element={<Create />} />
          <Route path="/edit-pet/:petId" element={<Edit />} />
          <Route path="/details/:petId" element={<Details />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>

      <footer id="site-footer">
        <p>@PetMyPet</p>
      </footer>

    </div>
    </AuthContext.Provider>
  );
}

export default App;
