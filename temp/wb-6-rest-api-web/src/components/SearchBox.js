import React from "react";

const SearchBox = ({ value, onChange, onSearch }) => (
  <div>
    <input type="text" value={value} onChange={onChange} />
    <button type="button" onClick={onSearch}>
      Get new articles
    </button>
  </div>
);

export default SearchBox;
