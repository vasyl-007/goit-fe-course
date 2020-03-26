import React from "react";
import ReactDOM from "react-dom";
import App from "./App";



ReactDOM.render(<App />, document.getElementById("root"));

// fetch(
//   "https://api.themoviedb.org/3/movie/popular?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=$1"
// )
//   .then(response => response.json())
//   .then(console.log);

// const fetcher = async () => {
//   await fetch(
//     "https://api.themoviedb.org/3/movie/popular?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=$1"
//   );
//   console.log(response);
// };
// fetcher();