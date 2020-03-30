import React from "react";
// import classNames from "classnames/bind";
import "./button/Button.css";
import styles from "./button/Button.module.css";

// let cx = classNames.bind(styles);
// const buttonStyles = {
//   display: "inline-flex",
//   margin: "0 4px",
//   padding: "8px 24px",
//   border: 0,
//   borderRadius: 2,
//   fontSize: 14,
//   fontFamily: "inherit",
//   backgroundColor: "teal"
// };

const Button = ({
  type = "button",
  label = "",
  disabled = false,
  icon = ""
}) => {
  const btnClasses = [styles.button];

  if (disabled) {
    btnClasses.push(styles - disabled);
  }

  // const classes = cx({
  //   button: true,
  //   active: !disabled,
  //   disabled: disabled
  // });

  if (disabled) {
    btnClasses.push(styles - disabled);
  }
  // const btnClasses = ["Button"];

  // if (disabled) {
  //   btnClasses.push("Button-disabled");
  // }
  return (
    <button
      type={type}
      disabled={disabled}
      // style={{ backgroundImage: `url(${icon})` }}
      disabled={disabled}
      // className={btnClasses.join(" ")}
      className={disabled ? styles.disabled : styles.button}
    >
      {label}
    </button>
  );
};
// const Button = ({
//   type = "button",
//   label = "",
//   disabled = false,
//   icon = ""
// }) => {
//   const btnClasses = ["Button"];

//   if (disabled) {
//     btnClasses.push("Button-disabled");
//   }
//   return (
//     <button
//       type={type}
//       disabled={disabled}
//       // style={{ backgroundImage: `url(${icon})` }}
//       className={btnClasses.join(" ")}
//       disabled={disabled}
//     >
//       {label}
//     </button>
//   );
// };
// const Button = ({
//   type = "button",
//   label = "",
//   disabled = false,
//   icon = ""
// }) => (
//   <button
//     type={type}
//     disabled={disabled}
//     style={{ ...buttonStyles, backgroundImage: `url(${icon})`, color: "white", backgroundColor: disabled ? "#00001f" : "#2196f3" }}
//   >
//     {label}
//   </button>
// );

export default Button;
