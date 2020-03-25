import React, { Component } from "react";

const passProps = props => BaseComponent => {
  return class PassProps extends Component {
    render() {
    //   console.log("props", props);
    //   console.log("this.props", this.props);
      return <BaseComponent {...props} {...this.props} />;
    }
  };
};

export default passProps;
