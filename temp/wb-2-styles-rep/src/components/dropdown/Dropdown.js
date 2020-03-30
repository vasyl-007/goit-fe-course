import React from "react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.css";
import {
  Container,
  HamburgerButton,
  DropdownContainer,
  List,
  ListItem
} from "./Dropdown.styled";

// console.log('styles', styles)

const Dropdown = ({ isOpen = false }) => (
  <Container>
    <HamburgerButton type="button">&#9776;</HamburgerButton>
    {isOpen && (
      <DropdownContainer>
        <List>
          <ListItem>Option 1</ListItem>
          <ListItem>Option 2</ListItem>
          <ListItem>Option 3</ListItem>
          <ListItem>Option 4</ListItem>
        </List>
      </DropdownContainer>
    )}
    {/* <div className={styles.container}>
      <button type="button" className={styles.button}>
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
      )}
    </div> */}
  </Container>
);
// const Dropdown = ({ isOpen = false }) => (
//   <div className={styles.container}>
//     <button type="button" className={styles.button}>
//       &#9776;
//     </button>

//     {isOpen && (
//       <div className={styles.dropdown}>
//         <ul className={styles.menu}>
//           <li className={styles.menuItem}>Option 1</li>
//           <li className={styles.menuItem}>Option 3</li>
//           <li className={styles.menuItem}>Option 2</li>
//           <li className={styles.menuItem}>Option 4</li>
//         </ul>
//       </div>
//     )}
//   </div>
// );

// Dropdown.propTypes = {
//   isOpen: PropTypes.bool
// };

export default Dropdown;
