import React from "react";

// // bad practice --
// const LoaderNew = () => <h2 style={{ fontSize: 40 }}>Loading...</h2>;

const styles = { fontSize: 40 };
// good practice ++
const LoaderNew = () => <h2 style={styles}>Loading...</h2>;

export default LoaderNew;
