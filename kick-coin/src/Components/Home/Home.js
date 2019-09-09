import React, { Component } from "react";
import Search from "./Search/Search";
import Card from "./Card/Card";

class Home extends Component {
  render() {
    const arr = [];
    arr.length = 8;
    const cards = arr.map(item => {
      return(
        <Card />
      )
    });

    return (
      <div>
        <div className="searchbox-container">
          <Search />
        </div>
        <div className="cards-container">{cards}</div>
      </div>
    );
  }
}
export default Home;
