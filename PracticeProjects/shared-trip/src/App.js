import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" />
      
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
