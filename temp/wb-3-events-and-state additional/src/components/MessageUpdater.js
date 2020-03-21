import React from "react";

const MessageUpdater = ({ updateTextMessage }) => (
  <>
    <button type="button" onClick={updateTextMessage}>
      Magic TimeButton
    </button>
    <hr />
  </>
);

export default MessageUpdater;
