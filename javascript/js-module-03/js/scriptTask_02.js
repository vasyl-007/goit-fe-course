// Task_02
function task_02() {
  // вариант решения №1 (через функцию)
  const countProps = function(obj) {
    console.log(Object.keys(obj).length);
  };
  console.log(countProps({})); // 0
  console.log(countProps({ name: "Mango", age: 2 })); // 2
  console.log(
    countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
  ); // 3
}

//=========================================

// вариант решения №2 (через свойство)
// const obj1 = {
//   name: "Mango",
//   age: 2
// };
// console.log(Object.keys(obj1).length);

// const obj2 = {
//   mail: "poly@mail.com",
//   isOnline: true,
//   score: 500
// };
// console.log(Object.keys(obj2).length);
// //=========================================
