import React from "react";
import PropTypes from "prop-types";

const TechList = ({ items = [] }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
  // <h3>{[1,2,3,4,5]}</h3>
  // <h3>[1,2,3,4,5]</h3>
);

TechList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};
export default TechList;
