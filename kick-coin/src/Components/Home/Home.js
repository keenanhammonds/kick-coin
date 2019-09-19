import React, { Component } from "react";
import Search from "./Search/Search";
import Card from "./Card/Card";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }
  render() {
    // The props are the shoe data so we are passing the shoe data form the app state.
    // map through the shoe data
    const shoeData = this.props.shoeData;
    console.log("this is the shoe data in home", this.props);
    const displayCards = shoeData.map(shoe => {
      return <Card key={shoe.imageUrl} shoe={shoe} />;
    });
    return (
      <div>
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
