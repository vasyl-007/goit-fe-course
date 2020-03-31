import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const randomRGB = [
  Math.round(Math.random() * 255),
  Math.round(Math.random() * 255),
  Math.round(Math.random() * 255)
];

const Statistics = ({ title, stats }) => (
  <div className={css.container}>
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(item => (
          <li
            key={item.id}
            className={css.item}
            style={{ backgroundColor: `rgb(${randomRGB})` }}
          >
            <span className={css.label}>{item.label} </span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

Statistics.defaultProps = {
  title: ""
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Statistics;
