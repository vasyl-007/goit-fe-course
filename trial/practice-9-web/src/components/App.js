import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Loader from "./Loader";
import ErrorNotification from "./ErrorNotification";
import * as articleAPI from "../services/article-api";

const mapper = articles => {
  return articles.map(({ objectID: id, url: link, ...props }) => ({
    id,
    link,
    ...props
  }));
};

export default class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = query => {
    this.setState({ isLoading: true });

    articleAPI
    .fetchArticles(query).then(({data}) => this.setState({articles: mapper(data.hits)})).catch(error => this.setState({error})).finally(() => this.setState({isLoading: false}))
  };

  render() {
    const {articles, isLoading, error} = this.state;
    return (
      <div>
        <h2>IT WORKS</h2>
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader />}
        {articles.length > 0 && <ArticleList items={articles} />}
      </div>
    );
  }
}
