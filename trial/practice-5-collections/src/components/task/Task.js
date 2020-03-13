import React from "react";
import PropTypes from "prop-types";
import styles from "./Tasks.module.css";

const Task = ({ text, priority, completed }) => (
  <div className={`${styles.task} ${styles[`${priority}Priority`]}`}>
    <p className={styles.text}>{text}</p>

    <hr />
    <div className={styles.actions}>
      <button type="button">Delete</button>

      <select name="priority" value={priority}>
        <option value="low">Low</option>
        <option value="normal">Normal</option>
        <option value="high">High</option>
      </select>

      <label>
        Complited:
        <input type="checkbox" checked={completed} />
      </label>
    </div>
  </div>
);

Task.propTypes = {
  text: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

export default Task;
