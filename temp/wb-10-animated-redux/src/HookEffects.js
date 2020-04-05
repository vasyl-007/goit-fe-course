import React, { Component, useState, useEffect } from "react";

const HookEffects = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div
        style={{
          textAlign: "center",
          backgroundColor: "violet",
        }}
      >
        <button onClick={() => setValue((value) => value + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <ClassCounter value={value} />
        <HookCounter value={value} />
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>show</button>;
  }
};

class ClassCounter extends Component {
  componentDidMount() {
    console.log("class: mount");
  }
  componentDidUpdate(props) {
    console.log("class: update");
  }
  componentWillUnmount() {
    console.log("class: unmount");
  }
  render() {
    return <p>{this.props.value}</p>;
  }
}

const HookCounter = ({ value }) => {
  useEffect(() => {
    console.log("useEffect");
  });
  return <p>{value}</p>;
};

export default HookEffects;
