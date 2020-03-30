import React, { Fragment } from "react";
import "./Buttons.css";
import styles from "./Button.module.css";

const buttonStyles = {
  backgroundColor: "grey",
  borderRadius: "2px",
  border: "1px dashed orange",
  padding: "16px"
};

const activeButton = {
  border: "2px solid red",
  padding: "16px",
  boxShadow: "0 2px 1px 1px"
};

const Buttons = ({ type = "button", disabled }) => {
  const btnClasses = [styles.button];

  if (false) {
    btnClasses.push(styles.disabled);
  }

  return (
    <Fragment>
      <button className={btnClasses.join(" ")} type={type} disabled={disabled}>
        BUTTON
      </button>
      <button className={btnClasses.join(" ")} type={type} disabled={disabled}>
        BUTTON
      </button>
      <button className={btnClasses.join(" ")} type={type} disabled={disabled}>
        BUTTON
      </button>
    </Fragment>
  );
};

// const Buttons = () => {
//   // const btnClasses = [styles.button];

//   return (
//     <Fragment>
//       <button type="button" className={styles.button}>
//         ANIMATED BUTTON
//       </button>
//       <button type="button" className={styles.button}>
//         Active button
//       </button>
//       <button type="button" className={styles.button} disabled={styles.disabled}>
//         Disabled button
//       </button>
//     </Fragment>
//   );
// };

// const Buttons = () => {
//   const btnClasses = ["Button"];

//   return (
//     <Fragment>
//       <button type="button" className={btnClasses}>
//         ANIMATED BUTTON
//       </button>
//       <button type="button" className={btnClasses}>
//         Active button
//       </button>
//       <button type="button" className={btnClasses.join("-disabled")}>
//         Active button
//       </button>
//     </Fragment>
//   );
// };

// const Buttons = () => (
//   <Fragment>
//     <button type="button" style={buttonStyles}>
//       ANIMATED BUTTON
//     </button>
//     <button type="button" style={activeButton}>
//       Active button
//     </button>
//   </Fragment>
// );

export default Buttons;
