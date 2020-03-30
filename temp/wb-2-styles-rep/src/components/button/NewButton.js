import React from "react";
// import styled from "styled-components";
import { StyledButton } from "./NewButton.styled";

// const StyledButton = styled.button`
//   display: inline-flex;
//   margin: 0 4px;
//   padding: 8px 24px;
//   border: 0;
//   border-radius: 2;
//   font-size: 14;
//   font-family: "inherit";
//   background-color: "red";
//   /* color: white; */
//   /* transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; */
//   color: ${props => (props.disabled ? "red" : "navy")};
//   background-image: ${props => `url(${props.icon})`};

//   :hover,
//   :focus {
//     background-color: orange;
//   }
// `;

// console.log('StyledButton', StyledButton)

// .active {
//   composes: button;
//   background-color: black;
//   color: white;
// }

// .disabled {
//   composes: button;
//   background-color: rgb(116, 168, 102);
//   color: black;
// }

const NewButton = ({
  type = "button",
  label = "",
  disabled = false,
  icon = ""
}) => (
  <StyledButton type={type} disabled={false} icon={icon}>
    {label}
  </StyledButton>
);

export default NewButton;
