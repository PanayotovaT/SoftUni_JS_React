import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
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
      </Routes>
    </AuthProvider>
  );
}

export default App;
