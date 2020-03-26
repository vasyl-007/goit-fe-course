import React, { Fragment, Component } from "react";
import faker from "faker";


const styles = {
  form: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    font: "inherit",
    padding: 8
  }
};


export default class CommentForm extends Component {
  state = {
    text: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddComment(
      this.state.text !== "" ? this.state.text : faker.lorem.sentence()
    );

    this.setState({
      text: ""
    });
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Add your comment..."
          />
          <button type="submit">Send</button>
        </form>
      </Fragment>
    );
  }
}
