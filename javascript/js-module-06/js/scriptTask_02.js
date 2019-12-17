// Task_02
import users from "./scriptLibrary.js";

const getUsersWithEyeColor = (array, color) =>
  users.filter(user => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
