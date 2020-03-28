import React from "react";

const CategorySelector = ({ options, value, onChange }) => (
  <>
    <select value={value} onChange={onChange}>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <button type="submit">Choose category</button>
  </>
);

export default CategorySelector;
