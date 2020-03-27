import React, { Component, Fragment } from "react";
import { v4 as uuId } from "uuid";
import styled from "styled-components";

import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";

// import Lifecycle from "./components/Lifecycle";

const Container = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export default class App extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    const persistedComments = localStorage.getItem("comments");
    if (persistedComments) {
      this.setState({ comments: JSON.parse(persistedComments) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("update ---->");
    console.log("prevState", prevState);
    console.log("this.state", this.state);

    if (prevState.comments !== this.state.comments) {
      localStorage.setItem("comments", JSON.stringify(this.state.comments));
    }
  }

  addComment = text => {
    const comment = {
      id: uuId(),
      text,
      createdAt: new Date().toISOString()
    };
    this.setState(prev => ({
      comments: [...prev.comments, comment]
    }));
  };

  render() {
    return (
      <Fragment>
        <h4>IT WORKS</h4>
        <Container>
          <CommentForm onAddComment={this.addComment} />
          <CommentList items={this.state.comments} />
        </Container>
        {/* <Lifecycle /> */}
      </Fragment>
    );
  }
}
