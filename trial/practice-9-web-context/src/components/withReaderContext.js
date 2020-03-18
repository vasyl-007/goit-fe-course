import React from "react";
import Reader from "./Reader";

const withReaderContext = BaseComponent => {
  return props => {
    return (
      <Reader.Consumer>
        {context => <BaseComponent {...props.children} {...context} />}
      </Reader.Consumer>
      //   <Reader.Consumer>
      //     {context => (
      //       <p>
      //         {context.currentIdx + 1} / {context.totalPublications}
      //       </p>
      //     )}
      //   </Reader.Consumer>
    );
  };
};

export default withReaderContext;
