// task 6
function task_06() {
  let userNumber;
  const numbers = [];
  let total = 0;
  let message;

  while (userNumber !== null) {
    userNumber = prompt("Введите число, которое затем будет суммироваться");
    if (userNumber === null) {
      break;
    }
    if (Number(userNumber)) {
      numbers.push(Number(userNumber));
    } else {
      alert("Было введено не число, попробуйте еще раз!");
    }
  }
  for (const number of numbers) {
    total += number;
  }
  message = `Общая сумма чисел равна: ${total}`;
  alert(message);
}
//=================================================
