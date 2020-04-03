import React from "react";
import s from './Filter.module.css'

const Filter = ({ getName, value }) => (
  <>
    <p className={s.findContact}>Find contact by name</p>
    <input
      type="text"
      onChange={getName}
      value={value}
      className={s.findInput}
    />
  </>
);

export default Filter;
