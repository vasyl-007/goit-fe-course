// Task 1
const parentSelector = document.querySelector("ul#categories");
const allLiItems = parentSelector.children;
const quantityOfLiItems = allLiItems.length;
console.log(`В списке вложено ${quantityOfLiItems} категории.`);

const result = index => {
  const allSubTitles = document.querySelectorAll("h2");
  const allLi = document.querySelectorAll("li.item");
  const allInnerLi = allLi[index].querySelectorAll("li");
  console.log(`Категория: ${allSubTitles[index].textContent}`);
  console.log(`Количество элементов: ${allInnerLi.length}`);
};
result(0);
result(1);
result(2);
//===================================
