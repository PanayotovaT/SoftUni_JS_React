import { Routes, Route } from 'react-router-dom';
import Create from './components/Create/Create';
import Details from './components/Details/Details';

import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="site-wrapper">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/details/:estateId" element={<Details />} />

          
        </Routes>
      
      </main>
      
      <footer>
           <p> © 2021</p>
        </footer>
    </div>
  );
}

export default App;
