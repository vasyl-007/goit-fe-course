import React from 'react'
import { Link } from "react-router-dom";

const itemStyles = {
  display: "flex",
  flexDirection: "column",
  padding: "10px 5px"
};

const Nav = () => (
  <ul>
    <li style={itemStyles}>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/about">About</Link>
    </li>
  </ul>
);

export default Nav;