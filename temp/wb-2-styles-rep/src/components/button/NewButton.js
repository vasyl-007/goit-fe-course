import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-flex;
  margin: 0 4px;
  padding: 8px 24px;
  border: 0;
  border-radius: 2;
  font-size: 14;
  font-family: "inherit";
  background-color: rgb(163, 56, 70);
  color: white;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  :hover,
  :focus {
    background-color: rgb(49, 33, 122);
  }
`;

const Button = ({
  type = "button",
  label = "",
  disabled = false,
  icon = ""
}) => (
  <StyledButton
    type={type}
    disabled={disabled}
    style={{ backgroundImage: `url(${icon})` }}
  >
    {label}
  </StyledButton>
);

export default Button;
