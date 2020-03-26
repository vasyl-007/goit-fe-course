import React, { Component } from "react";
import List from '../../components/list/List'

class Films extends Component {
  state = {};

  async componentDidMount() {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=$1"
    );
    console.log(data);
  }

  render() {
    return <h3>films</h3>;
  }
}

export default Films;
