// Task_01

// const name = 'Генератор защитного поля';
// let price = 1000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов.`);
// price = 2000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов.`);

// const name = 'Генератор защитного поля';
// let price = 1000;
// let message = `Выбран ${name}, цена за штуку ${price} кредитов.`;
// console.log(message);
// price = 2000;
// message = `Выбран ${name}, цена за штуку ${price} кредитов.`;
// console.log(message);


// ======================================

// Task_02
// const total = 100;
// const ordered = 50;
// let message;
// if (ordered <= total) {
//   message = "Заказ оформлен, с вами свяжется менеджер";
// } else {
//   message = "К сожалению, на складе недостаточно товара";
// }
// console.log(message);

// // Тернарная запись:
// const total = 100;
// const ordered = 50;
// const = message <= ordered <= total ? "Заказ оформлен, с вами свяжется менеджер" : "К сожалению, на складе недостаточно товара";
// console.log(message);
// ======================================

// Task_03
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// //
// const userInput = prompt('Введите пароль администратора');

// if (userInput === null) {
//     message = 'Отменено пользователем!';
// } else if (userInput === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
// } else {
//     message = 'Доступ запрещен, неверный пароль!';
// }
// console.log (message);
// ======================================

// Task_04
// let credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice;
// let message;

// const userInput = prompt ('Какое количество дроидов вы хотите купить?');
// if (userInput === null) {
//     message = 'Отменено пользователем!';
// } else {
//     totalPrice = userInput * pricePerDroid;
//     if (totalPrice > credits) {
//     message = 'Недостаточно средств на счету!';
//     } else {
//         credits -= totalPrice;
//         message = `Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`;
//     }
// }
// console.log(message);
// ======================================

// Task_05

// let cost;
// let message;
// let userChoice = prompt("Введите вашу страну для доставки товара");
// if (userChoice === null) {
//   message = "Отменено пользователем!";
// } else {
//   userChoice = userChoice.toLocaleLowerCase();

//   switch (userChoice) {
//     case "china":
//       cost = 100;
//       message = `Доставка в ${userChoice} будет стоить ${cost} кредитов`;
//       break;
//     case "chile":
//       cost = 250;
//       message = `Доставка в ${userChoice} будет стоить ${cost} кредитов`;
//       break;
//     case "australia":
//       cost = 170;
//       message = `Доставка в ${userChoice} будет стоить ${cost} кредитов`;
//       break;
//     case "india":
//       cost = 80;
//       message = `Доставка в ${userChoice} будет стоить ${cost} кредитов`;
//       break;
//     case "jamaica":
//       cost = 120;
//       message = `Доставка в ${userChoice} будет стоить ${cost} кредитов`;
//       break;
//   }
//   if ((userChoice = null)) {
//     message = "Выберите страну доставки";
//   } else if (!cost) {
//     message = "В вашей стране доставка не доступна";
//   }
// }
// console.log(message);

// ======================================

// Task_06
// let userNumber;
// //  = prompt("Введите число, которое затем будет суммироваться");
// let total = 0;
// let message;

// while (userNumber !== null) {
//   userNumber = prompt("Введите число, которое затем будет суммироваться");
//   if (userNumber === null){
//       break;
//   };
//   if (Number(userNumber)) {
//     total += Number(userNumber);
//   } else {
//     alert("Было введено не число, попробуйте еще раз!");
//   }
// };
// message = `Общая сумма чисел равна: ${total}`;
// alert(message);
