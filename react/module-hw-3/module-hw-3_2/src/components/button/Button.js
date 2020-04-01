import React from "react";
import s from "./Button.module.css";

const Button = ({ onLoadMore }) => {
  return (
    <button
      // scrollTo={{
      //   top: document.documentElement.scrollHeight,
      //   behavior: "smooth"
      // }}
      onClick={onLoadMore}
      className={s.button}
    >
      LOAD MORE
    </button>
  );
};

export default Button;
