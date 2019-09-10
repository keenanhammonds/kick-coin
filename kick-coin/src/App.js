import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Add from "./Components/Add/Add";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      shoes: "shoe"
    };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link class="link" to="/kicks">
              <h1 className="logo">Kick-Coin</h1>
            </Link>
            <Link class="link" to="/add-kicks">
              <h3 className="nav-link-text">Price Your Kicks</h3>
            </Link>
            <Link class="link" to="/about">
              <h3 className="nav-link-text">About</h3>
            </Link>
          </nav>
          <div className="main">
            <Switch>
              <Route path="/about" exact component={About} />
              <Route path="/add-kicks" exact component={Add} />
              <Route
                exact
                path="/kicks"
                render={() => <Home shoes={this.state.shoes} />}
              />
              <Route
                exact
                path="/"
                render={() => <Home shoes={this.state.shoes} />}
              />
            </Switch>
          </div>
          <footer>
            <p>Made by Keenan Hammonds</p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
