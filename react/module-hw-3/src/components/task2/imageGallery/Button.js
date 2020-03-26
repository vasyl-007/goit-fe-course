import React from "react";

const Button = ({ onLoadMore }) => {
  return <button onClick={onLoadMore}>LOAD MORE</button>;

  // window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: 'smooth',
  //   });
};

export default Button;
