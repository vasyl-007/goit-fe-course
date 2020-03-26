import React from "react";

export const reducer = (state = 10, actions) => {
  switch (actions.type) {
    case "INCREMENT":
      return state + actions.payload;

    default:
      return state;
  }
};


const increment = () => ({
  type: "INCREMENT",
  payload: 
});

// const reducer1 = (state = 10) => state;
// const reducer2 = (state = 10) => state;
// const reducer3 = (state = 10) => state;
// const reducer4 = (state = 10) => state;

// export default {
//   reducer1,
//   reducer2,
//   reducer3,
//   reducer4
// };
