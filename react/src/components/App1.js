import React from "react";
import List from "./List";
import ListItem from "./ListItem";

// export const App = () => (
//   <Fragment>
//     <h2>HELLO my friend</h2>;<h3>Successfully finished</h3>
//   </Fragment>
// );
// export const App = () => (
//   <>
//     <h2>HELLO my friend</h2>;<h3>Successfully finished</h3>
//   </>
// );

const arr = ["react", "redux", "graphQL", "mobX"];
const App = () => (
  <>
    <List data={arr} />
    <ListItem />
    return <>
    {arr.length !== 0 && <List data={arr}</> : <Default />
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quam
      dolorum cupiditate nobis similique totam at magni, fuga distinctio, esse
      voluptatem pariatur? Itaque minima neque quisquam tempora ab voluptatum
      magnam. Mollitia quam ducimus maiores odio quaerat aut perspiciatis
      voluptatum nesciunt asperiores sapiente, nostrum dicta reiciendis iste
    </p>
    <h2>HELLO my friend</h2>;
  </>
);
export default App;
// const App = () => (

// );
// // sl tab
// export default App;
