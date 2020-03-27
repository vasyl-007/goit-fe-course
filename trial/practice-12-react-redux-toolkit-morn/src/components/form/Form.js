import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import styles from "./form.module.css";
import { addNotes } from "../../redux/actions";
import shortId from "shortid";


class Form extends Component {
  state = {
    note: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const { note } = this.state;
    this.props.addNotes({ note, id: shortId() });
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
          />
        </form>
      </div>
    );
  }
}
// const mapSTP = state => state;

const mapDTP = { addNotes };

export default connect(null, mapDTP)(Form);
