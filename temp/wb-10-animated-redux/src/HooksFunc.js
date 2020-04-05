import React, { hooks, useState } from "react";

const HookFunc = () => {
  const [color, setColor] = useState("brown");
  const [fontSize, setFontSize] = useState(14);
  // const [color, setColor] = useState("white");

  // const setDark = () => setColor("black");
  // const setLight = () => setColor("white");

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: color,
        fontSize: `${fontSize}px`,
      }}
    >
      <p style={{ color: "white" }}>Helo World!</p>
      <button onClick={() => setColor("brown")}>Dark</button>
      <button onClick={() => setColor("orange")}>Light</button>
      <button onClick={() => setFontSize((s) => s + 2)}>FontSize</button>
    </div>
  );
};

export default HookFunc;
