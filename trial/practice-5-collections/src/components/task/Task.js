import React from "react";
import PropTypes from "prop-types";
import styles from "./Tasks.module.css";

const Task = ({
  id,
  text,
  priority,
  completed,
  onDeleteTask,
  onUpdateComplited,
  onUpdatePriority
}) => (
  <div className={`${styles.task} ${styles[`${priority} Priority`]}`}>
    <p className={styles.text}>{text}</p>

    <hr />
    <div className={styles.actions}>
      <select
        name="priority"
        value={priority}
        onChange={e => onUpdatePriority(id, e.target.value)}
      >
        <option value="low">Low</option>
        <option value="normal">Normal</option>
        <option value="high">High</option>
      </select>

      <label>
        Complited:
        <input
          type="checkbox"
          checked={completed}
          onChange={onUpdateComplited}
        />
      </label>

      <button type="button" onClick={onDeleteTask}>
        Delete
      </button>
    </div>
  </div>
);

Task.propTypes = {
  text: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDeleteTask: PropTypes.func.isRequired
};

export default Task;


