// Task_05

function task_05() {
  let cost;
  let message;
  let userChoice = prompt("Введите вашу страну для доставки товара");
  if (userChoice === null) {
    message = "Отменено пользователем!";
  } else {
    userChoice = userChoice.toLocaleLowerCase();

    switch (userChoice) {
      case "china":
        cost = 100;
        message = `Доставка в ${userChoice} будет стоить ${cost} кредитов`;
        break;
      case "chile":
        cost = 250;
        message = `Доставка в ${userChoice} будет стоить ${cost} кредитов`;
        break;
      case "australia":
        cost = 170;
        message = `Доставка в ${userChoice} будет стоить ${cost} кредитов`;
        break;
      case "india":
        cost = 80;
        message = `Доставка в ${userChoice} будет стоить ${cost} кредитов`;
        break;
      case "jamaica":
        cost = 120;
        message = `Доставка в ${userChoice} будет стоить ${cost} кредитов`;
        break;
    }
    if ((userChoice = null)) {
      message = "Выберите страну доставки";
    } else if (!cost) {
      message = "В вашей стране доставка не доступна";
    }
  }
  console.log(message);
}
// ======================================
