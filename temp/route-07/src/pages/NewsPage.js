import React, { Component } from "react";
import axios from "axios";
import queryString from "query-string";
import {Link, Route} from "react-router-dom";
import ContentPage from "./ContactPage";

class NewsPage extends Component {
  state = {
    article: null
  };

  async componentDidMount() {
    const data = await axios.get(
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-12&sortBy=publishedAt&apiKey=ed5ebee752754cf7a93918ae83acba6f"
    );
    console.log(data.data.articles);
    const findArticle = data.data.articles.find(
      article => article.publishedAt === this.props.match.params.id
    );

    this.setState({
      article: findArticle
    });
  }

  render() {
    const { article } = this.state;
    console.log(article);
    console.log(this.props);

    const parse = queryString.parse(this.props.location.search);
    return (
      <>
        {article && (
          <>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <img style={{ width: 500 }} alt="news" src={article.urlToImage} />
            <Link to="">Content</Link>
            <Route
              path={`${this.props.location.pathname}/content`}
              component={ContentPage}
            />
          </>
        )}
      </>
    );
  }
}

export default NewsPage;
