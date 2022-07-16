import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import Create from './components/Create/Create';
import Details from './components/Details/Details';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import Edit from './components/Edit/Edit';
import GuestGuard from './Common/GuestGuard';
import PrivateRoute from './Common/PrivateRoute';


function App() {
  return (
    <AuthProvider>

      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<GuestGuard><Login /></GuestGuard>} />
            <Route path="/register" element={<GuestGuard><Register /></GuestGuard>} />
            <Route path="/logout" element={<PrivateRoute><Logout /></PrivateRoute>} />
            <Route path="/create" element={<PrivateRoute><Create /></PrivateRoute>} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/edit/:id" element={ <PrivateRoute><Edit /> </PrivateRoute>} />
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
