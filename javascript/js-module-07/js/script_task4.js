// Task 4
let counterValue = { value: 0 };

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const count = document.querySelector("#value");

function increment(counterValue) {
  counterValue.value += 1;
  this.textContent = counterValue.value;
}
function decrement(counterValue) {
  counterValue.value -= 1;
  this.textContent = counterValue.value;
}

incrementBtn.addEventListener("click", increment.bind(count, counterValue));
decrementBtn.addEventListener("click", decrement.bind(count, counterValue));

// style
incrementBtn.style.width = "50px";
decrementBtn.style.width = "50px";
incrementBtn.style.background = "teal";
decrementBtn.style.background = "teal";
//===================================
