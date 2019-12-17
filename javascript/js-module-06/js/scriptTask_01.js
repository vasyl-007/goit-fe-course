// Task_01

import users from "./scriptLibrary.js";

const getUserNames = array => {
  return array.map(element => {
    return element.name;
  });
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
