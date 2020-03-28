import React from "react";
import PropTypes from "prop-types";

const ArticlesList = ({ articles }) => (
  <ul>
    {articles.map(({ id, link, title }) => (
      <li key={id}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ArticlesList;
