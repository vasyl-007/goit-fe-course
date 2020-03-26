import React, { Component } from "react";
import friends from "./friends.json"; //[{},{},{}]
import FriendList from "./friendList/FriendList";

class App extends Component {
  state = {
    isOnline: ""
  };
  render() {
    return <FriendList friends={friends} />;
  }
}

export default App;
