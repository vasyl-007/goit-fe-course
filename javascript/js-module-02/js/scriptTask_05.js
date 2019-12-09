// Task_05

function task_05() {
  function checkForSpam(str) {
    const newStr = str.toLowerCase();
    const array = newStr.split(" ");
    for (let i = 0; i < array.length; i++) {
      if (array[i].includes("spam") || array[i] === "sale") {
        // можно решать через метод includes, а можно через сравнивание
        return true;
      }
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j].includes("spam") || array[i][j].includes("sale")) {
          return true;
        }
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
