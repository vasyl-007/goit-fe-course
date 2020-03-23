import React, { Component, Fragment } from "react";
import queryString from "query-string";

class Home extends Component {
  state = {};

  //   categoryChange = category => {
  //     this.props.history.push({
  //       pathname: this.props.location.pathname,
  //       search: `category=${category}`
  //     });
  //   };

//   getCategoryFromProps = props =>
//     queryString.parse(props.location.search).category;

//   componentDidUpdate(prevProps) {
//     const prevCategory = this.getCategoryFromProps(prevProps);
//     const nextCategory = this.getCategoryFromProps(this.props);

//     if (prevCategory !== nextCategory) {
//       this.fetchArticles(nextCategory);
//     }
//   }

  render() {
    return (
      <Fragment>
        <h4>HOME page</h4>
      </Fragment>
    );
  }
}

export default Home;
