// Task 7
const sizeTransformer = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

sizeTransformer.addEventListener("input", sizeToTransform);

function sizeToTransform(elem) {
  const range = elem.currentTarget;
  text.style.fontSize = range.value + "px";
}
// // style
sizeTransformer.style.marginTop = "40px";