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
        <div className="cards-container-container">
            <div className="cards-container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
      </div>
    );
  }
}
export default Home;
