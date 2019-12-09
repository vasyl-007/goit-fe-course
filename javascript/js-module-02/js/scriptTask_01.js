// Task_01

function task_01() {
  function logItems(array) {
    const items = [];
    for (let i = 0; i < array.length; i++) {
      items.push(`${i + 1} - ${array[i]}`);
    }
    console.log(items);
  }
  logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
}
//===============================================
