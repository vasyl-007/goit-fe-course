// Task_06
function task_06() {
  let userNumber;
  let total = 0;
  let message;

  while (userNumber !== null) {
    userNumber = prompt("Введите число, которое затем будет суммироваться");
    if (userNumber === null) {
      break;
    }
    if (Number(userNumber)) {
      total += Number(userNumber);
    } else {
      alert("Было введено не число, попробуйте еще раз!");
    }
  }
  message = `Общая сумма чисел равна: ${total}`;
  alert(message);
}
// =========================================
