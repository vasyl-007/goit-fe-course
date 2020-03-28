import React, { Component } from "react";
import ContentLoader from "react-content-loader";

export default class Loader extends Component {
  render() {
    return (
      <ContentLoader
        gradientRatio={4}
        backgroundColor={"#333"}
        foregroundColor={"#999"}
      />
    );
  }
}
    