import React from "react";
import s from "./Button.module.css";

const Button = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className={s.button}>
      LOAD MORE
    </button>
  );
};

export default Button;
