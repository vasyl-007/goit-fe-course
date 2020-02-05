import React from "react";

const choosePriority = {
  normal: {
    border: "1px solid green"
  },
  high: {
    border: "1px solid red"
  },
  low: {
    border: "1px solid blue"
  }
};

// const choosePriority = param => {
//   let border;
//   switch (param) {
//     case "low":
//       border = { border: "1px solid blue" };
//       break;
//     case "high":
//       border = { border: "1px solid red" };
//       break;
//     default:
//       border = { border: "1px solid green" };  
//       break;
//   }
//   return border;
// };

// const choosePriority = {
//   low: { border: "1px solid blue" },
//   high: { border: "1px solid red" },
//   normal: { border: "1px solid green" }
// };

const WishListItem = ({ wish, date, id, onDeleteWish, priority }) => {
  //   const styles = choosePriority(priority);
  const styles = choosePriority[priority];
  return (
    <li style={styles}>
      <h2>{wish}</h2>
      <p>{date}</p>
      <button type="button" onClick={() => onDeleteWish(id)}>
        delete
      </button>
    </li>
  );
};
export default WishListItem;
