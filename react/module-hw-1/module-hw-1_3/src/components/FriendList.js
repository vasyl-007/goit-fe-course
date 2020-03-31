import React from "react";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <div className={css.container}>
    <h5 className={css.heading}>Friends list</h5>
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
          {/* <FriendListItem {...friend} /> */}
        </li>
      ))}
    </ul>
  </div>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default FriendList;
