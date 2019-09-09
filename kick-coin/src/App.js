import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Search from "./Components/Search";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/kicks">
            <h2 className="nav-link-text">Kick-Coin</h2>
          </Link>
          <Link to="/add-kicks">
            <h3 className="nav-link-text">Add</h3>
          </Link>
          <Link to="/about">
            <h3 className="nav-link-text">About</h3>
          </Link>
          <Route path="/add-kicks" exact component={Add} />
          <Route path="/about" exact component={About} />
        </nav>
        <div className="searchbox-container">
        <Search />
        </div>
        <div className="main-card-container">
          <Route path="/kicks" exact component={Home} />
          <Route path="/" exact component={Home} />
        </div>
        <footer>
          <p>Made by Keenan Hammonds</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
