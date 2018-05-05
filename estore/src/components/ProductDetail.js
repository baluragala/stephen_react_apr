import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.match.params.pname}</h1>
        <button onClick={() => this.props.history.goBack()}>Back</button>
      </div>
    );
  }
}

export default ProductDetail;
