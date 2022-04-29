import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import MyList from './components/MyList/MyList';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-list" element={<MyList />} />
        </Routes>

      </div>
    </AuthProvider>

  );
}

export default App;
