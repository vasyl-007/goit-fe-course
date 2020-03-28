import React, { Component, Fragment, Children } from "react";

import ArticlesList from "./components/ArticlesList";
import Loader from "./ui/Loader";
import ArticlesApi from "./services/ArticlesApi";

export default class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    ArticlesApi.fetchArticlesWithQuery("react")
      .then(articles => this.setState({ articles }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <Fragment>
        <h4>IT WORKS</h4>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading ? <Loader /> : <ArticlesList articles={articles} />}
        {/* {isLoading ? <p>Loading ... </p> : <ArticlesList articles={articles} />} */}
        {/* {articles.length > 0 ? <ArticlesList articles={articles} /> : null} */}
      </Fragment>
    );
  }
}
