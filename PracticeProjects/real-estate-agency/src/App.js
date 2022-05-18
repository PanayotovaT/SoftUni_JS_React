import { Routes, Route } from 'react-router-dom';

import Create from './components/Create/Create';
import Dashboard from './components/Dashboard/Dashboard';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';

import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Search from './components/Search/Search';

import { AuthContextProvider } from './contexts/AuthContext';
import PrivateGuard from './common/PrivateGuard';
import PublicGuard from './common/PublicGuard';
import { NotificationProvider } from './contexts/NotificationContext';
import NotificationSection from './common/NotificationSection';

function App() {
  return (
    <NotificationProvider>
      <AuthContextProvider>

        <div className="site-wrapper">
          <Header />
          <NotificationSection />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route element={<PublicGuard />}>
                <Route path="/login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
              </Route>
              <Route element={<PrivateGuard />} >
                <Route path="/create" element={<Create />} />
                <Route path="/edit/:estateId" element={<Edit />} />
                <Route path="/details/:estateId" element={<Details />} />
                <Route path="/search" element={<Search />} />
                <Route path="/logout" element={<Logout />} />
              </Route>
              <Route path="/not-found" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

          </main>

          <footer>
            <p> © 2021</p>
          </footer>
        </div>
      </AuthContextProvider>
    </NotificationProvider>
  );
}

export default App;
