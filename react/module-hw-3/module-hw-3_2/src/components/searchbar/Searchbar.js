import React from "react";
import s from "./Searchbar.module.css";

const Searchbar = ({ value, onChange, onSubmit }) => (
  <header className={s.searchbar}>
    <form onSubmit={onSubmit} className={s.searchForm}>
      <button type="submit" className={s.searchFormButton}>
        <span className={s.searchFormButtonLabel}>Search</span>
      </button>

      <input
        className={s.searchFormInput}
        type="text"
        autoComplete="off"
        autofocus
        placeholder="Search images and photos"
        onChange={onChange}
        value={value}
      />
    </form>
  </header>
);

export default Searchbar;
