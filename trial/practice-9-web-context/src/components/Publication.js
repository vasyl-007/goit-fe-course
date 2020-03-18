import React from "react";
// import Reader from "./Reader";
import withReaderContext from "./withReaderContext";

const Publication = ({ publication }) => (
  <article className="publication">
    <h2>{publication.title.slice(0, 20)}...</h2>
    <p>{publication.text.slice(0, 300)}...</p>
  </article>
);

// const Publication = ({ publication }) => (
//   <Reader.Consumer>
//     {context => (
//       <article className="publication">
//         <h2>{context.publication.title.slice(0, 20)}...</h2>
//         <p>{context.publication.text.slice(0, 300)}...</p>
//       </article>
//     )}
//   </Reader.Consumer>
// );

export default withReaderContext(Publication);
