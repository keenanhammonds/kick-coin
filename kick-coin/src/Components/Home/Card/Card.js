import React, { Component } from "react";
import axios from "axios";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      bitcoinPrice: null
    };
  }
  getData = () => {
    let shoe = this.props.shoe;
    axios
      .get(`https://blockchain.info/tobtc?currency=USD&value=${shoe.Price}`)
      .then(price => {
        this.setState({ bitcoinPrice: price.data });
      });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    let shoe = this.props.shoe;
    const styles = {
      backgroundImage: `url(${shoe.imageUrl})`,
      height: "230px",
      width: "250px",
      border: "2px solid white",
      margin: "20px",
      borderRadius: "4px"
    };

    return (
      <div style={styles}>
        <ul>
          <li>
            <p>{shoe.colorWay}</p>
          </li>
          <li>
            <p>{`Value in USD: $${shoe.Price}`}</p>
          </li>
          <li>
            <p>{`Value in bitcoin: ${this.state.bitcoinPrice}`}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Card;
