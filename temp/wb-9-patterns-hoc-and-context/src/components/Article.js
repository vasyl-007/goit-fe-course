import React from "react";
import withLog from "../hocs/withLog";


const Article = ({ title, text }) => (
  <article>
    {/* <h2>{title}</h2>
    <p>{text}</p> */}
  </article>
);

export default withLog(Article);
