// Task_10

import users from "./scriptLibrary.js";

const getSortedUniqueSkills = users =>
  users
    .reduce((allSkills, user) => {
        allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .filter((skill, idx, arrayOfAllSkills) => arrayOfAllSkills.indexOf(skill) === idx)
    .sort((a, b) => (a > b ? 1 : -1));

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


