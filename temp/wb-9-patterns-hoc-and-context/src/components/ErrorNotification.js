import React from "react";
import passProps from "../hocs/passProps";

const ErrorNotification = ({ text }) => (
  <h4>Whoops, something went wrong: {text}</h4>
);

export default passProps({ text: "sorry (" })(ErrorNotification);
