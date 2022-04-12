import './App.css';
import Create from './components/Create/Create';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyPets from './components/MyPets/MyPets';
import Register from './components/Register/Register';

function App() {
  return (
    <div id="container">
      <Header />

      <main id="site-content">
        <Home />
        <Login />
        <Register />
        <Details />
        <Create />
        <Edit />
        <MyPets />
      </main>




      <footer id="site-footer">
        <p>@PetMyPet</p>
      </footer>

    </div>
  );
}

export default App;
