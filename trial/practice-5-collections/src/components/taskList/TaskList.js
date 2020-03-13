import React from "react";
import PropTypes from "prop-types";
import Task from "../task/Task";
import styles from "./TaskList.module.css";

const TaskList = ({ items }) =>
  items.length > 0 && (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.id}>
          <Task {...item} />
        </li>
      ))}
    </ul>
  );

TaskList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};
export default TaskList;
