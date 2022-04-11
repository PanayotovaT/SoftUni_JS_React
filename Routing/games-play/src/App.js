import { Route, Switch, Redirect } from 'react-router-dom';

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

  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Switch>
          <Route path="/" exact component={WelcomeWorld} />
          <Route path="/games" exact component={Catalog} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/create" component={Create} />
          <Route path="/edit" component={Edit} />
          <Route path="/games/:gameId" component={GameDetails} />
          <Route path="/custom">
            <h2 className="custom-title">Custom Page</h2>
            <p className="custom-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veritatis numquam facere neque, voluptates consectetur deserunt tempora officia nostrum, consequatur dignissimos minima provident ad quidem sequi ipsum impedit laudantium atque.</p>
          </Route>
          <Route path="/logout" render={(props) => {
              console.log('Logged Out');
              return <Redirect to='/' />
          }} />
        </Switch>
      </main>

    </div>
  );
}

export default App;
