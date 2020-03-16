// import { Route, Link, Switch } from "react-router-dom";
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import * as services from '../services';
// import {fetcher} from '../services';

const mapper = news => {
  console.log("articles ------>", news);
  return news.map(article => ({ ...article, id: uuidv4() }));
};

class HomePage extends Component {
  state = {
    // news: null
    news: null
  };

  async componentDidMount() {
    const data = await axios.get(
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-16&sortBy=publishedAt&apiKey=138be9da72774ac5acbd0267b4890105"
    );
    console.log(data.data.articles);
    mapper(data.data.articles);

    this.setState({
      // news: data.data.articles
      news: mapper(data.data.articles)
    });
  }

  render() {
    const { news } = this.state;
    return (
      <>
        {news &&
          news.map(article => (
            // <li key={uuidv4()}>
            <li key={article.id}>
              <Link
                to={{
                  // pathname: `/home/${article.publishedAt}`,
                  pathname: `/home/${article.id}`,
                  search: "?category=adventure&city=USA",
                  hash: "#treasure-island",
                  state: { from: news }
                }}
              >
                <img
                  style={{ width: 300 }}
                  alt="news"
                  src={article.urlToImage}
                />
              </Link>
            </li>
          ))}
      </>
    );
  }
}

export default HomePage;
