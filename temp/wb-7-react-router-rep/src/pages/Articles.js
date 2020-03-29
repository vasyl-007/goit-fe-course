import React, { Component } from "react";
import ArticleList from "../components/ArticleList";
import * as articleAPI from "../services/articles-api";

export default class Articles extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    articleAPI.fetchArticles().then(items => this.setState({ items }));
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h2>Articles Page</h2>
        <ArticleList items={items} />
      </div>
    );
  }
}
