import './App.css';
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

function App() {
  return (
    
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
  );
}

export default App;
