import React from "react";
import FriendListItem from "./friendListItem/FriendListItem";


const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => (
      <FriendListItem key={friend.id} friend={friend} /> //{}
    ))}
  </ul>
);

export default FriendList;
