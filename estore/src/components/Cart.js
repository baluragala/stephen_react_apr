import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <div>
        <h3> No.of Items In Cart: {this.props.cartCount} </h3>
        <h2> Cart Value: {this.props.cartValue} </h2>
      </div>
    );
  }
}

export default Cart;
