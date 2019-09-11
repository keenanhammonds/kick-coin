import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Add from "./Components/Add/Add";
import shoeData from "./shoe-data.json"
import "./App.css";
// import shoes from  "./shoe-images"

class App extends Component {
  constructor() {
    super();
    this.state = {
      shoeData: shoeData
    };
  }
//   componentDidMount(){
//     console.log(shoeData)
// }
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link className="link" to="/kicks">
              <h1 className="logo">Kick-Coin</h1>
            </Link>
            <Link className="link" to="/add-kicks">
              <h3 className="nav-link-text">Price Your Kicks</h3>
            </Link>
            <Link className="link" to="/about">
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
                render={() => <Home shoeData={this.state.shoeData} />}
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
