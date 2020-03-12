import React, { Component } from "react";
import css from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  state = {
    isOpen: false
  };
  render() {
    return (
      <div className={css.sideBar}>
        <NavLink
          exact
          to="/"
          className={css.link}
          activeClassName={css.activeLink}
        >
          {" "}
          HOME{" "}
        </NavLink>
        <NavLink
          to="/catalog"
          className={css.link}
          activeClassName={css.activeLink}
        >
          {" "}
          CATALOG{" "}
        </NavLink>
      </div>
    );
  }
}

export default Sidebar;
