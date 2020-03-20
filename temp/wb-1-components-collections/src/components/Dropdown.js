import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ isOpen = false }) => (
  <div className="container">
    <button type="button" className="button">
      &#9776;
    </button>

    {isOpen && (
      <div className="dropdown">
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>React native</li>
          <li>Electron</li>
        </ul>
      </div>
    )}
  </div>
);

Dropdown.propTypes = {
  isOpen: PropTypes.bool
};

export default Dropdown;
