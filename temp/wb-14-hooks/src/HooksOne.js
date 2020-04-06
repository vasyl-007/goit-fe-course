import React, { useState, useEffect } from "react";

const HooksOne = () => {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button type="button" onClick={() => setValue((v) => v + 1)}>
          PLUS
        </button>
        <button type="button" onClick={() => setVisible(false)}>
          hide
        </button>
      </div>
    );
  } else {
    return (
      <button type="button" onClick={() => setVisible(true)}>
        show
      </button>
    );
  }
};

const Notification = () => {};



export default HooksOne;
