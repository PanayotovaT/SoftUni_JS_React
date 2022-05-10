import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

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
import { AuthProvider } from './contexts/AuthContext';
import Logout from './components/Logout/Logout';

import PrivateRoute from './common/PrivateRoute';
import GuardedRoute from './common/GuardedRoute';
import { NotifiactionProvider } from './contexts/NotificationContext';
import Notification from './common/Notification';

function App() {

  return (
    <NotifiactionProvider>
      <AuthProvider>

        <div className="App">
          <Header />
          <Notification />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/shared-trips" element={< SharedTrips />} />
              <Route path="/profile" element={<PrivateRoute>< Profile /></PrivateRoute>} />
              <Route path="/details/:carId" element={< Details />} />
              <Route path="/*" element={< NotFound />} />
              <Route element={<GuardedRoute />}>
                <Route path="/create" element={<Create />} />
                <Route path="/edit/:carId" element={< Edit />} />

              </Route>

            </Routes>
          </main>

          <footer id="sticky-footer" className="bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white">Copyright &copy; Shared Trip 2021</p>
            </div>
          </footer>
        </div>
      </AuthProvider>
    </NotifiactionProvider>
  );
}

export default App;
