import Catalog from "./components/Catalog";
import Create from "./components/Create";
import Edit from "./components/Edit";
import GameDetails from "./components/GameDetails";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import WelcomeWorld from "./components/WelcomeWorld";

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <WelcomeWorld />
        <Login />
        <Register />
        <Create />
        <Edit />
        <GameDetails />
        <Catalog />
      </main>

    </div>
  );
}

export default App;
