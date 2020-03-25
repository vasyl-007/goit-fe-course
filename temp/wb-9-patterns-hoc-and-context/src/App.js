import React, { Component, Fragment } from "react";
import Article from "./components/Article";
import ErrorNotification from "./components/ErrorNotification";
import withFetch from "./hocs/withFetch";
import ArticleList from "./components/ArticleList";

const mapper = articles => {
  // console.log("articles", articles);

  return articles.map(({ objectID: id, url: link, ...props }) => ({
    id,
    link,
    ...props
  }));
};

class App extends Component {
  render() {
    const { data, isLoading, error } = this.props;

    let articles = [];

    if (data.articles) {
      articles = mapper(data.articles);
    }

    // const articles = map
    return (
      <Fragment>
        <h4>IT WORKS</h4>
        <ArticleList items={articles} />
        <Article title="TITLE" text="TEXT" />
        <ErrorNotification />
      </Fragment>
    );
  }
}

export default withFetch(
  "http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=138be9da72774ac5acbd0267b4890105"
)(App);
