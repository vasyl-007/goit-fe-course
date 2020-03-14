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
  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddTask({ ...this.state });

    this.setState({
      text: "",
      priority: "normal"
    });
  };
  render() {
    const { text, priority } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="text"
          value={text}
          onChange={this.handleChange}
          placeholder="Enter task content..."
        />
        <label className={styles.label}>
          Select task priority:
          <select name="priority" value={priority} onChange={this.handleChange}>
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
        </label>
      </form>
    );
  }
}
