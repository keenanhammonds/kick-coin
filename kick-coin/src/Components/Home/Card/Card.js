import React, { Component } from "react";

class Card extends Component {

  render() {
    const shoe = this.props.shoe
    console.log(shoe.imageUrl)
    return (
        <div>
            <img src={shoe.imageUrl} alt={`image of ${shoe.colorWay}`}/>
        </div>
    )
  }
}

export default Card;
