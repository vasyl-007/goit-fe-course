import React, { Component } from "react";
import { Link } from "react-router-dom";
import NewsPage from "";
import axios from "axios";

class HomePage extends Component {
  state = {
    news: null
  };

  async componentDidMount() {
    const data = await axios.get(
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-12&sortBy=publishedAt&apiKey=138be9da72774ac5acbd0267b4890105"
    );
    console.log(data.data.articles);
    this.setState({
      news: data.data.articles
    });
  }

    render() {
    return (
      <>
        <Link to="/home/new">NEWS</Link>

        <button>
          {() => history.push(`${history.location.pathname}/news`)}
        </button>
        <Route
          path={`${history.location.pathname}/news`}
          component={NewsPage}
        />
      </>
    );
  }
}

export default HomePage;

// const HomePage = ({ history }) => {
//   console.log("history", history);
//   return (
//     <>
//       <Link to="/home/new">NEWS</Link>

//       <button>{() => history.push(`${history.location.pathname}/news`)}</button>
//       <Route path={`${history.location.pathname}/news`} component={NewsPage} />
//     </>
//   );
// };
