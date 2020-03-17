import React from "react";
import withHigherOrderComponent from "./HOCDrawer";
const param = "Vasyl M";

const Drawer = props => (
  <form onSubmit={props.handleSumbit}>
    <input
      placeholder="firstName"
      name="firstName"
      onChange={props.handleChangeValue}
    />
    <input
      placeholder="lastName"
      name="lastName"
      onChange={props.handleChangeValue}
    />
    <input
      placeholder="age"
      name="age"
      onChange={props.handleChangeValue}
      //   onChange={(props.handleChangeValue) => {}}
    />
    <button type="submit">SUBMIT</button>
  </form>
);

export default withHigherOrderComponent(param)(Drawer);
