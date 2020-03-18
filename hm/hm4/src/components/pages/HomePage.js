import React, { Component } from "react";
import { Link } from "react-router-dom";
import services from "../services";

class HomePage extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    services
      .getTrending()
      .then(data => this.setState({ movies: data.data.results }));
  }

  render() {
    return (
      <>
        <h2>Trending today</h2>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `movies/${movie.id}`,
                  state: { id: movie.id }
                }}
              >
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
