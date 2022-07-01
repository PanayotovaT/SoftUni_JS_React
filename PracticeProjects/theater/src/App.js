import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Create from './components/Create/Create';
import Details from './components/Details/Details';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';


function App() {
  return (
    <AuthProvider>

      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/create" element={<Create />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </main>
        <footer >
          <div >© 2020
            <p>JS Back-End</p>
          </div>
        </footer>
      </div>
    </AuthProvider>
  );
}

export default App;
