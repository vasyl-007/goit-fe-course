import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./TaskEditor.module.css";

export default class TaskEditor extends Component {
  state = {};
  render() {
    return (
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="text"
          placeholder="Enter task content..."
        />
        
      </form>
    );
  }
}
