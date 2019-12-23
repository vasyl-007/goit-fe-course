// Task 6

const inputField = document.querySelector("#validation-input");
const correctLength = inputField.dataset.length;

inputField.addEventListener("blur", markInputedText);

function markInputedText(element) {
  const inputed = element.currentTarget;

  if (Number(inputed.value.length) === Number(correctLength)) {
    inputed.style.borderColor = document.getElementById(
      "validation-input"
    ).className = "valid";
  } else {
    inputed.style.borderColor = document.getElementById(
      "validation-input"
    ).className = "invalid";
  }
}
//===================================
