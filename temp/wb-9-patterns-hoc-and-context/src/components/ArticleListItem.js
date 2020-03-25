import React, { Fragment } from "react";

const ArticleListItem = ({
  title,
  author,
  description,
  content,
  urlToImage,
  link
}) => (
  <Fragment>
    <h2>{title}</h2>
    <p>{author}</p>
    <p>{description}</p>
    <p>{content}</p>
    <img width={400} src={urlToImage} />
    <a href={link} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  </Fragment>
);

export default ArticleListItem;
