import React, { Component } from "react";
import photoOne from "./photo-one.png"
import photoTwo from "./photo-two.jpg"
import photoThree from "./photo-three.png"

class About extends Component {
  render() {
    return (
      <div className="main-about-container">
        <div className="about-container">
          <h3 className="hustlers">Kick Coin is for the hustlers.</h3>
          <p className="text-item">
            Kick Coin connects and encourages streetwear enthusiasts,
            fashionistas, trend setters & artists <br />
            with cryptocurrency in a simple way. How much is your gear worth in
            cryptocurrency? <br />
            Resellers and buyers have always known sneakers can be an
            investment, Kick-Coin furthers that philosophy.
          </p>
        </div>
        <div>
            <img id="photo-one" src={photoOne} />
            <img id="photo-two" src={photoTwo} />
            <img id="photo-three" src={photoThree}/>
        </div>
      </div>
    );
  }
}

export default About;
