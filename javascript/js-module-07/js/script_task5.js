// Task 5

const inputField = document.querySelector("#name-input");
const name = document.querySelector("#name-output");

const inputName = input => {
  const inputField = input.currentTarget;
  name.textContent = inputField.value !== "" ? inputField.value : "незнакомец";
  if (inputField.value !== "") {
    inputField.value === inputField.value;
  } else {
    inputField.value === "незнакомец";
  }
};
inputField.addEventListener("input", inputName.bind(name));
// style
inputField.style.marginTop = "20px";
//===================================
