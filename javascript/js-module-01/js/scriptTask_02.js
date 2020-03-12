// Task_02

function task_02() {
  const total = 100;
  const ordered = 50;
  let message;
  if (ordered <= total) {
    message = "Заказ оформлен, с вами свяжется менеджер";
  } else {
    message = "К сожалению, на складе недостаточно товара";
  }
  console.log(message);
}
// // Тернарная запись:
// const total = 100;
// const ordered = 50;
// const = message <= ordered <= total ? "Заказ оформлен, с вами свяжется менеджер" : "К сожалению, на складе недостаточно товара";
// console.log(message);
// ======================================
