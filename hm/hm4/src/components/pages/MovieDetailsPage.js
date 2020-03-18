import React, { Component } from "react";
import HomePage from "./HomePage";
import services from "../services";

class MovieDetailsPage extends Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    //   const queryParams = queryString.parse(this.props.location);
    //   console.log("queryParams", queryParams);
    services
      .getMovieDetails(this.props.location.state.id)
      .then(data => this.setState({ movie: data }));
  }

  render() {
      const partUrl = "https://image.tmdb.org/t/p/original/";
    return (
      <>
        {console.log("this.props", this.props)}
        <h2>Movie Detail Page</h2>
        <img src={`${partUrl}`+ `${this.props.location.pathname}`}/>
        {/* <img src={`${partUrl} + this.state.movie.data.poster__path}`} /> */}
        {/* `https://image.tmdb.org/t/p/original${backdrop_path}` */}
      </>
    );
  }
}

export default MovieDetailsPage;
