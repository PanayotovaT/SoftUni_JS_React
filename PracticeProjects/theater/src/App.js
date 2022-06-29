import  { Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/login" element={<Login /> } />
          <Route path="/register" element={<Register /> } />
        </Routes>
      </main>
      <footer >
            <div >© 2020
                <p>JS Back-End</p>
            </div>
        </footer>
    </div>
  );
}  
 
export default App;
