import { useState } from "react";

import Catalog from "./components/Catalog";
import Create from "./components/Create";
import Edit from "./components/Edit";
import ErrorPage from "./components/ErrorPage";
import GameDetails from "./components/GameDetails";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import WelcomeWorld from "./components/WelcomeWorld";

function App() { 
const [page, setPage] = useState('/home');

const routes = {
  '/home':  <WelcomeWorld />,
  '/games': <Catalog />,
  '/login':   <Login />,
  '/register':   <Register />,
  '/create':   <Create />,
  '/edit':    <Edit />,
  '/game-details':    <GameDetails />,
}

  const navigationChangeHandler = (path) => {
    console.log(path);
    setPage(path);

  }

  return (
    <div id="box">
      <Header navigationChangeHandler={navigationChangeHandler} />
      <main id="main-content">
        {routes[page] || <ErrorPage />}
      </main>

    </div>
  );
}

export default App;
