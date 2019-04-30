import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreatePlayer from "./components/create-player.component";
import PlayersList from "./components/players-list.component";
import CreateGame from "./components/create-game.component";
import GamesList from "./components/game-list.component";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Ping Pong Game Tracker</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Players</Link>
              </li>
              <li className="navbar-item">
                <Link to="/createPlayer" className="nav-link">Add Player</Link>
              </li>
              <li className="navbar-item">
                <Link to="/gameList" className="nav-link">Games</Link>
              </li>
              <li className="navbar-item">
                <Link to="/createGame" className="nav-link">Games List</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <Route path="/" exact component={PlayersList} />
        <Route path="/createPlayer" component={CreatePlayer} />
        <Route path="/gameList" exact component={GamesList} />
        <Route path="/createGame" component={CreateGame} />
      </div>
    </Router>
    );
  }
}

export default App;
