import React from "react";
import PropTypes from "prop-types";
import styles from "./TaskFilter.module.css";

const TaskFilter = ({ value, onChangeFilter }) => (
  <>
    <h2>IT WORKS</h2>
    <input
      type="text"
      className={styles.input}
      value={value}
      onChange={onChangeFilter}
      placeholder="Type to filter tasks..."
    />
  </>
);

export default TaskFilter;
