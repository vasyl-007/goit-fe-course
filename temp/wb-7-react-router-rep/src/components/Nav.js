import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "red"
};

const Nav = () => (
  <ul>
    <li>
      <NavLink exact to="/" activeStyle={activeStyle}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/articles" activeStyle={activeStyle}>
        Articles
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </li>
  </ul>
);

export default Nav;
