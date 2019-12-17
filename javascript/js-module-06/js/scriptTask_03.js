// Task_03

import users from "./scriptLibrary.js";

const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender)
.map(user => user.name)
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
