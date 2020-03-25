import React from "react";
// import PropTypes from "prop-types";
import ArticleListItem from "./ArticleListItem";
import withLog from "../hocs/withLog";
import Togglable from "./Togglable";
import shortId from "shortid";

const ArticleList = ({ items }) =>
  console.log("items!!!", items) || (
    <ul>
      {items.map(
        ({link, title, author, description, content, urlToImage }) => (
          <li key={shortId()}>
            <Togglable>
              {({ on, onToggle }) => (
                <>
                  <button onClick={onToggle}>{on ? "Hide" : "Show"}</button>
                  {on && (
                    <ArticleListItem
                      title={title}
                      link={link}
                      author={author}
                      description={description}
                      content={content}
                      urlToImage={urlToImage}
                      link={link}
                    />
                  )}
                </>
              )}
            </Togglable>
          </li>
        )
      )}
    </ul>
  );

// ArticleList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       link: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired
// };

export default withLog(ArticleList);
