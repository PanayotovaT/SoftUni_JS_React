import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Create from './components/Create/Create';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import { AuthProvider } from './contexts/AuthContext';
import Logout from './components/Logout/Logout';
import MyPosts from './components/MyPosts/MyPosts';

function App() {
  return (
    <AuthProvider>

      <div className="site-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create" element={<Create />} />
            <Route path="/details/:postId" element={<Details />} />
            <Route path="/edit/:postId" element={<Edit />} />
            <Route path="/my-posts" element={<MyPosts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>

        </main>

      </div>
    </AuthProvider>
  );
}

export default App;
