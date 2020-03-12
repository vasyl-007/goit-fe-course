import React from "react";
import style from './FriendListItem.module.css';



const FriendListItem = ({ friend }) => (
  <li className={style.item}>
    <span className={friend.isOnline ? style.isOnline : style.isOffline}></span>
    <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
    <p className={style.name}>{friend.name}</p>
  </li>
);

export default FriendListItem;
