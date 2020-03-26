import React, { Fragment } from "react";
import { connect } from "react-redux";

function App(props) {
  console.log("props", props);
  return (
    <div style={{ width: 300, margin: "0 auto" }}>
      <h4>IT WORKS</h4>
      <button type="button" onClick={() => props.increment(4)}>
        {props.count}
      </button>
      <h4>{props.count}</h4>
      <button type="button" onClick={() => console.log("Decrement")}>
        {props.count}
      </button>
    </div>
  );
}
// reduxmap
const mapStateToProps = state => {
  console.log("state", state);
  return {
    count: state,
    x: 5,
    y: 10
  };
};

const mapDispatchToProps = {
  increment: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
