import React from "react";

const withLog = BaseComponent => {
  return function WithLog(props) {
    // console.log(
    //   `Calling ${BaseComponent.name} with props ${props.title} and ${props.text}`
    // );
    return <BaseComponent {...props} />;
  };
};

export default withLog;
