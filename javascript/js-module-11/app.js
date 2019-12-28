import fetchFunction from "./fetch.js";
const source = document.getElementById("template").innerHTML;
const template = Handlebars.compile(source);

const BASE_URL = "//restcountries.eu/rest/v2/name/";

const refs = {
  searchInput: document.getElementById("search-input"),
  divOutput: document.querySelector(".output"),
  outputList: document.querySelector(".output-list")
};

refs.searchInput.addEventListener("input", inputHandler);

let functionId;

function inputHandler(e) {
  clearTimeout(functionId);
  functionId = setTimeout(searchProcess, 1000);
}

function searchProcess() {
  const inputValue = refs.searchInput.value;
  if (inputValue === "") {
    clearOutput();
    return;
  }
  fetchFunction(BASE_URL, inputValue, onDataReady);
}

function onDataReady(data) {
  clearOutput();
  if (data.length >= 10) {
    fnTooManyMatches();
  } else if (data.length > 1) {
    showCountryList(data);
  } else {
    showOneCountry(data[0]);
  }
}

function fnTooManyMatches() {
  console.log("Too many matches found! Please specify your request");
}

function showCountryList(countryList) {
  const lis = countryList.reduce(
    (acc, item, idx) => (acc += `<li>${idx}: ${item.name}</li>`),
    ""
  );
  refs.outputList.insertAdjacentHTML("beforeend", lis);
}

function showOneCountry(county) {
  const markup = template(county);
  refs.divOutput.innerHTML = markup;
}

function clearOutput() {
  refs.divOutput.innerHTML = "";
  refs.outputList.innerHTML = "";
}