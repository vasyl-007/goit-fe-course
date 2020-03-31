import React from "react";
import allFriends from "../friends.json";
import FriendList from "./FriendList";

function App() {
  return (
    <>
      <FriendList friends={allFriends} />
    </>
  );
}

export default App;
