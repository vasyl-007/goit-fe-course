import React from "react";
import WishListItem from "./wishList_Item/WishList_Item";

const WishList = ({ data, onDeleteWish }) => (
  <ul>
    {data.map(elem => (
      <WishListItem key={elem.id} {...elem} onDeleteWish={onDeleteWish} />
    ))}
  </ul>
);
export default WishList;

// class WishList extends Component {
//     state = {  }
//     render() {
//         return (
//             <h2>Title</h2>
//         );
//     }
// }

// export default WishList;
