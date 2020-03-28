import React, { Component, Fragment } from "react";
import axios from "axios";
import ArticlesList from "./components/ArticlesList";
import Loader from "./ui/Loader";
import LoaderNew from "./ui/LoaderNew";
import ErrorNotification from "./ui/ErrorNotification";
import CategorySelector from "./components/CategorySelector";
import SearchForm from "./components/SearchForm";
// import SearchBox from "./components/SearchBox";

import * as articlesApi from "./services/articlesApi";
// import articlesApi from "./services/articlesApi";

// функция-помощник, которая возвращает массив объектов
// с другими названиями свойств (в другом формате запись свойств в объекте)
const mapperTransform = articles => {
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
    error: null,
    newArticles: [],
    query: "",
    category: ""
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.category !== this.state.category) {
      this.getArticles(this.state.category);
    }
  }

  // getArticles = async query => {
  //   const articles = await articlesApi
  //     .fetchArticlesWithQuery(query)
  //     .then(articles => this.setState({ articles: mapperTransform(articles) }))
  //     .catch(error => this.setState({ error }))
  //     .finally(() => this.setState({ isLoading: false }));
  // };

  getArticles = query => {
    articlesApi
      .fetchArticlesWithQuery(query)
      .then(articles => this.setState({ articles: mapperTransform(articles) }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  // getArticles = query => {
  //   articlesApi
  //     .fetchArticlesWithQuery(query)
  //     .then(articles => this.setState({ articles: mapperTransform(articles) }))
  //     .catch(error => this.setState({ error }))
  //     .finally(() => this.setState({ isLoading: false }));
  // };

  // componentDidMount() {
  //   this.setState({ isLoading: true });

  //   articlesApi
  //     .fetchArticlesWithQuery("hooks")
  //     .then(articles => this.setState({ articles: mapperTransform(articles) }))
  //     .catch(error => this.setState({ error }))
  //     .finally(() => this.setState({ isLoading: false }));
  // }

  // handleFetch = () =>
  //   fetch("https://hn.algolia.com/api/v1/search?query=react")
  //     .then(res => res.json())
  //     // .then(console.log)
  //     // .then(res => this.setState({ newArticles: res.hits }));
  //     .then(({ hits }) => this.setState({ newArticles: hits }))

  handleFetch = () =>
    fetch("https://hn.algolia.com/api/v1/search?query=react")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      // .then(console.log)
      // .then(res => this.setState({ newArticles: res.hits }));
      .then(({ hits }) => this.setState({ newArticles: hits }));

  handleQueryChange = e => {
    this.setState({ query: e.target.value });
  };

  handleCategoryChange = e => {
    this.setState({
      category: e.target.value
    });
  };

  render() {
    const { articles, isLoading, error, query, category } = this.state;

    return (
      <Fragment>
        <h4>IT WORKS</h4>
        <button type="button" onClick={this.handleFetch}>
          Fetch articles
        </button>
        <hr />
        <SearchForm onSubmit={this.getArticles} />
        <hr />
        {/* <SearchBox
          onChange={this.handleQueryChange}
          onSearch={this.getArticles}
          value={query}
        /> */}
        <hr />
        <CategorySelector
          options={["HTML", "css", "react", "redux"]}
          value={category}
          onChange={this.handleCategoryChange}
        />
        <hr />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader />}
        {articles.length > 0 && <ArticlesList articles={articles} />}
        {/* {error && <p>Whoops, something went wrong: {error.message}</p>} */}
        {/* {isLoading ? <Loader /> : <ArticlesList articles={articles} />} */}
        {/* {isLoading ? <p>Loading ... </p> : <ArticlesList articles={articles} />} */}
        {/* {articles.length > 0 ? <ArticlesList articles={articles} /> : null} */}
      </Fragment>
    );
  }
}
