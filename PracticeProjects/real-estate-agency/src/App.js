import { Routes, Route } from 'react-router-dom';
import Create from './components/Create/Create';

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

          
        </Routes>
      
      </main>
    </div>
  );
}

export default App;
