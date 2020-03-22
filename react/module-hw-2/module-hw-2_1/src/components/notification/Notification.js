import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Notification = ({ message, total }) => (
  <Fragment>{total === 0 && <span>{message}</span>}</Fragment>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired
};

export default Notification;
