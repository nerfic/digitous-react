import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Favorites from "./views/Favorites"
import Popular from "./views/Popular"
import PopularBattle from "./views/PopularBattle"
import Weekly from "./views/Weekly"
import WeeklyBattle from "./views/WeeklyBattle"

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Moovice</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/"><span className="nav-link">Home</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/popular"><span className="nav-link">Popular</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/popular-battle"><span className="nav-link">Popular Battle</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/weekly"><span className="nav-link">Weekly</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/weekly-battle"><span className="nav-link">Weekly Battle</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/favorites"><span className="nav-link">Favorites</span></Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/">

            </Route>
            <Route path="/popular">
              <Popular />
            </Route>
            <Route path="/popular-battle">
              <PopularBattle />
            </Route>
            <Route path="/weekly">
              <Weekly />
            </Route>
            <Route path="/weekly-battle">
              <WeeklyBattle />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;