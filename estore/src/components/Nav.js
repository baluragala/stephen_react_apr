import React from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/products" activeStyle={activeLinkStyle}>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeStyle={activeLinkStyle}>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup" activeStyle={activeLinkStyle}>
          Signup
        </NavLink>
      </li>
    </ul>
  </nav>
);

const activeLinkStyle = {
  backgroundColor: "grey",
  color: "crimson"
};

export default Nav;
