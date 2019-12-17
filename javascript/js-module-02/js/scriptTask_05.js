// Task_05

function task_05() {
  function checkForSpam(str) {
    const newStr = str.toLowerCase();
    const array = newStr.split(" ");
    for (let i = 0; i < array.length; i++) {
      if (array[i].includes("spam") || array[i].includes("sale")) {
        return true;
      }
    }
    return false;
  }
  console.log(checkForSpam("Latest technology news")); // false
  console.log(checkForSpam("JavaScript weekly newsletter")); // false
  console.log(checkForSpam("Get best sale offers now!")); // true
  console.log(checkForSpam("[spam] How to earn fast money?")); // true
}
// ======================================
