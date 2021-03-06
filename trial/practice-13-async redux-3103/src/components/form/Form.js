import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import shortId from "shortid";
import styles from "./form.module.css";
import { addNotes } from "../../redux/actions";
import { putTask, getTask } from "../../redux/operations";

const initialState = {
  note: ""
};

class Form extends Component {
  state = {
    ...initialState
  };

  componentDidMount() {
    this.props.getTask();
  }

  handleSubmit = async e => {
    e.preventDefault();
    // call reducer fn

    const note = {
      note: this.state.note
    };
    // if (this.state.note) {
    //   this.props.addNotes(note);
    // }
    await this.props.putTask(note);

    await this.props.getTask();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <TextField
            className={styles.input}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            name="note"
            onChange={this.handleChange}
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default connect(null, { putTask, getTask })(Form);
