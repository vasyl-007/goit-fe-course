import React from "react";
import PropTypes from "prop-types";

const Panel = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

Panel.defaultProps = {
  title: "title of the Panel",
  children: []
};
Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array
};

export default Panel;
