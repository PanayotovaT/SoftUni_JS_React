import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from './components/Home/Home';

function App() {
  return (
    <div className="site-wrapper">
      <Header />

      <main>
        <Routes>
          <Route to="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
