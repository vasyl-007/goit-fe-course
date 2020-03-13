import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./TaskEditor.module.css";

export default class TaskEditor extends Component {
  state = {
    text: "",
    priority: "normal"
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="text"
          placeholder="Enter task content..."
        />
        <label className={styles.label}>
          Select task priority:
          <select name="priority" value={priority}>
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
        </label>
      </form>
    );
  }
}
