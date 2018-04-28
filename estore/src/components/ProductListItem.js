import React from "react";
import PropTypes from "prop-types";

class ProductListItem extends React.Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, this.props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  render() {
    let { product, addToCart } = this.props;
    console.log("render");
    return (
      <div style={styles}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>{product.price} USD</h3>
        <button onClick={() => addToCart(product)}>ADD TO CART</button>
      </div>
    );
  }
}

const styles = {
  padding: 20,
  backgroundColor: "lightyellow",
  margin: 10,
  borderRadius: 20,
  border: "1px solid black"
};

ProductListItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    price: PropTypes.number
  }).isRequired,
  addToCart: PropTypes.func.isRequired
};

ProductListItem.defaultProps = {
  product: {
    title: "Prd1",
    description: "test desc",
    price: 0
  }
};

export default ProductListItem;
