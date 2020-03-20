import React from "react";
import Dropdown from "./Dropdown";
import PropTypes from "prop-types";

const Mailbox = ({ unreadMessages }) => (
  <div>
    <Dropdown isOpen={true} />
    <h2>Hello dear Guest!</h2>
    {unreadMessages.length > 0 ? (
      <p>You have {unreadMessages.length} unread messages.</p>
    ) : (
      <p>No unread messages.</p>
    )}
    {/* {unreadMessages.length > 0 && (
      <p>You have {unreadMessages.length} unread messages.</p>
    )} */}
  </div>
);

Mailbox.defaultProps = {
  unreadMessages: []
};
Mailbox.propTypes = {
  unreadMessages: PropTypes.array
};

export default Mailbox;
