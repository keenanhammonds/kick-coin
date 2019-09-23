import React, { Component } from "react";
import Card from "./Card/Card";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleChange = (e) => {
    e.preventDefault()

  }

  render() {
    // The props are the shoe data so we are passing the shoe data form the app state.3
        <div className="searchbox-container">
          <div className="inner-search-container">
            <input
              className="form-input"
              className="searchbox"
              placeholder="Search A Sneaker"
              type="text"
            ></input>
          </div>
        </div>
        <div className="cards-container-container">
          <div className="cards-container"></div>
          {displayCards}
        </div>
      </div>
    );
  }
}
export default Home;
