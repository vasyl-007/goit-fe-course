import React from "react";
import { Link, NavLink } from "react-router-dom";

const activeStyle = {
  color: "violet"
};

const itemStyles = {
  display: "flex",
  flexDirection: "column",
  padding: "2px 5px"
};

const Nav = () => (
  <ul>
    <li style={itemStyles}>
      <NavLink to="/" exact activeStyle={activeStyle}>Home</NavLink>
      {/* <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/about">About</Link> */}
    </li>
    <li style={itemStyles}>
      <NavLink to="/articles" activeStyle={activeStyle}>Articles</NavLink>
    </li>
    <li style={itemStyles}>
      <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
    </li>
  </ul>
);

export default Nav;
