import React from "react";
import allFriends from "../friends.json";
import FriendList from "./FriendList";

function App() {
  return (
    <>
      <h3>IT WORKS</h3>
      <FriendList friends={allFriends} />
    </>
  );
}

export default App;
