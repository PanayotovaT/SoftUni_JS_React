import { useState } from "react";
import { Route, Switch } from 'react-router-dom';

import Catalog from "./components/GameCatalog/Catalog";
import Create from "./components/Create";
import Edit from "./components/Edit";
import ErrorPage from "./components/ErrorPage";
import GameDetails from "./components/GameDetails";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import WelcomeWorld from "./components/home/WelcomeWorld";

function App() {
  const [page, setPage] = useState('/home');

  const navigationChangeHandler = (path) => {
    console.log(path);
    setPage(path);

  }

  const router = (path) => {
    let pathName = path.split('/');
    let rootPath = pathName[1];
    let argument = pathName[2];

    const routes = {
      'home': <WelcomeWorld navigationChangeHandler={navigationChangeHandler} />,
      'games': <Catalog navigationChangeHandler={navigationChangeHandler} />,
      'login': <Login />,
      'register': <Register />,
      'create': <Create />,
      'edit': <Edit />,
      'details': <GameDetails id={argument} />,
    }

    return routes[rootPath];
  }

  return (
    <div id="box">
      <Header navigationChangeHandler={navigationChangeHandler} />
      <main id="main-content">
        <Switch>
          <Route path="/" exact component={WelcomeWorld} />
          <Route path="/games" component={Catalog} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/create" component={Create} />
          <Route path="/edit" component={Edit} />
        </Switch>
          <Route path="/details/:id" component={GameDetails} />
      </main>

    </div>
  );
}

export default App;
