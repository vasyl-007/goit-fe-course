// Task_01


function task_01() {
  import users from "./scriptLibrary.js";

  const getUserNames = users.map(user => {
    return user.name;
  });

  console.log(getUserNames);
}
// ================================================
