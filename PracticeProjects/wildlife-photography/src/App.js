import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Create from './components/Create/Create';
import Home from './components/Home/Home';

function App() {
  return (

    <div className="site-wrapper">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>

      </main>

    </div>
  );
}

export default App;
