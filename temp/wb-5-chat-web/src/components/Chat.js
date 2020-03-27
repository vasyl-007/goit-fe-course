import React, { Component, Fragment } from "react";
import { v4 as uuId } from "uuid";
import Editor from "./Editor";
import MessageFeed from "./MessageFeed";

const chatStyles = {
  maxWidth: 640,
  marginLeft: "auto",
  marginRight: "auto"
};

export default class Chat extends Component {
  state = { messages: [] };

  addMessage = text => {
    const message = {
      id: uuId(),
      text,
      createdAt: new Date().toISOString()
    };

    this.setState(prev => ({
      messages: [...prev.messages, message]
    }));
  };
  render() {
    const { messages } = this.state;
    return (
      <Fragment>
        <div>Chat Component</div>
        <div style={chatStyles}>
          <Editor onAddMessage={this.addMessage} />
          <MessageFeed items={messages} />
        </div>
      </Fragment>
    );
  }
}
