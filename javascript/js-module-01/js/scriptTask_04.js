// Task_04
let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let message;

const userInput = prompt ('Какое количество дроидов вы хотите купить?');
if (userInput === null) {
    message = 'Отменено пользователем!';
} else {
    totalPrice = userInput * pricePerDroid;
    if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
    } else {
        credits -= totalPrice;
        message = `Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`;
    }
}
console.log(message);

// ======================================