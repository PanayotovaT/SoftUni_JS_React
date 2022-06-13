import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
      </div>
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
