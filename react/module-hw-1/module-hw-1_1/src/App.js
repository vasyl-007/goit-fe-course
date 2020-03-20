import React from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
import userData from "./components/profile/user.json";

console.log("userData", userData);
function App() {
  return (
    <>
      <Profile user={userData} />
    </>
  );
}

export default App;
