import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// console.log('styles', styles)

const StyledButton = styled.button`
  display: inline-block;
  background: teal;
  color: #fff;
`;

console.log("StyledButton", StyledButton);

const NewDropdown = ({ isOpen = true }) => (
  <div>
      <StyledButton>Styled Component</StyledButton>
    {/* <button type="button" className={styles.button}>
      &#9776;
    </button>

    {isOpen && (
      <div className={styles.dropdown}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>Option 1</li>
          <li className={styles.menuItem}>Option 3</li>
          <li className={styles.menuItem}>Option 2</li>
          <li className={styles.menuItem}>Option 4</li>
        </ul>
      </div>
    )} */}
  </div>
);

NewDropdown.propTypes = {
  isOpen: PropTypes.bool
};

export default NewDropdown;
