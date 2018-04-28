import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Clock from "./Clock";
import ProductListItem from "./components/ProductListItem";
import Cart from "./components/Cart";
import ManageProduct from "./components/ManageProduct";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      products: [
        {
          title: "Mac book pro",
          description: "A laptop from apple",
          price: 2000
        },
        {
          title: "Dell XPS",
          description: "A laptop from dell",
          price: 2000
        },
        {
          title: "Dell Alienware",
          description: "A laptop from dell",
          price: 2000
        },
        {
          title: "Lenovo Aspire",
          description: "A laptop from lenovo",
          price: 2000
        }
      ]
    };
    this.onAddToCart = this.onAddToCart.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
  }

  onAddToCart(product) {
    //alert("App" + product.title);
    let cart = this.state.cart;
    cart.push(product);
    this.setState({ cart });
  }

  renderProducts() {
    return this.state.products.map(p => (
      <ProductListItem product={p} addToCart={this.onAddToCart} />
    ));
  }

  render() {
    return (
      <div>
        <Header title="Online Store" />
        <Nav />
        <Cart
          cartCount={this.state.cart.length}
          cartValue={this.state.cart.reduce((total, p) => total + p.price, 0)}
        />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/products" render={this.renderProducts} />
      </div>
    );
  }
}

export default App;
