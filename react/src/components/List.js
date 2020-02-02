import React from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

const List = ({ title, data = [] }) => {
  console.log("props", title, data);

  return data.map(elem => {
    return (
      <ul>
        <h2>{elem}</h2>
      </ul>
    );
    // return <h2>{elem}</h2>;
  });
};

List.defaultProps = {
  data: ["i am arr"]
};

List.propTypes = {
    data: PropTypes.array
}
export default List;
