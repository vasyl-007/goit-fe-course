import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Loader from "./Loader";
import ErrorNotification from "./ErrorNotification";
import * as articleAPI from "../services/article-api";
import withFetch from "./hoc/withFetch";

const mapper = articles => {
  return articles.map(({ objectID: id, url: link, ...props }) => ({
    id,
    link,
    ...props
  }));
};

class App extends Component {
  // componentDidMount() {
  //   this.fetchArticles();
  // }

  // fetchArticles = query => {
  //   this.setState({ isLoading: true });

  //   articleAPI
  //     .fetchArticles(query)
  // .then(({ data }) => this.setState({ articles: mapper(data.hits) }))
  // .catch(error => this.setState({ error }))
  // .finally(() => this.setState({ isLoading: false }));
  // };

  render() {
    const { data, isLoading, error } = this.props;
    console.log(data);

    let articles = [];

    if (data.hits) {
      articles = mapper(data.hits);
    }

    return (
      <div>
        {/* <h2>IT WORKS</h2> */}
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader />}
        {articles.length > 0 && <ArticleList items={articles} />}
        {/* App */}
      </div>
    );
  }
}

export default withFetch("https://hn.algolia.com/api/v1/search?query=react")(
  App
);
