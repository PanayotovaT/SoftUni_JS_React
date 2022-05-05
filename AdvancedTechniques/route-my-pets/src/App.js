import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import Create from './components/Create/Create';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyPets from './components/MyPets/MyPets';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import ErrorBoundary from './Common/ErrorBoundary';
import Notification from './Common/Notification';

function App() {

  return (
    <ErrorBoundary>
      <NotificationProvider>
        <AuthProvider>

          <div id="container">
            <Header />
            <Notification />
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
        </AuthProvider>
      </NotificationProvider>
    </ErrorBoundary>
  );
}

export default App;
