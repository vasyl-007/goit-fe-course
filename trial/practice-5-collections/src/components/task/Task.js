import React from "react";
import PropTypes from "prop-types";
import PrioritySelector from "../prioritySelector/PrioritySelector";
import Priority from "../../utils/Priority";
import styles from "./Task.module.css";

const options = Object.values(Priority);

const Task = ({
  id,
  text,
  priority,
  completed,
  onDeleteTask,
  onUpdateComplited,
  onUpdatePriority
}) => (
  <div className={`${styles.task} ${styles[`${priority}Priority`]}`}>
    <p className={styles.text}>{text}</p>

    <hr />
    <div className={styles.actions}>
      <PrioritySelector
        options={options}
        value={priority}
        onChange={e => onUpdatePriority(id, e.target.value)}
      />

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
