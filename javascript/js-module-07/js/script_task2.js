// Task 2
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
const listOfIngredients = document.querySelector("ul#ingredients");

const markupIngredients = ingredients.reduce(
  (htmlString, ingredient) => htmlString + `<li>${ingredient}</li>`,
  ""
);
listOfIngredients.insertAdjacentHTML("afterbegin", markupIngredients);
console.log(listOfIngredients);
// ===================================
