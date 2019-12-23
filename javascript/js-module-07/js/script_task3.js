// Task 3
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

const ulGallery = document.querySelector("#gallery");
// markup
const markupGallery = images.reduce(
  (htmlString, elem) =>
    htmlString +
    `<li><img src=${elem.url}, height = auto, width = 300px alt=${elem.alt}></li>`,
  ""
);
ulGallery.insertAdjacentHTML("afterbegin", markupGallery);
console.log(ulGallery);

// style
ulGallery.style.display = "flex";
ulGallery.style.listStyle = "none";
ulGallery.style.width = "800px";
ulGallery.style.margin = "0 auto";
ulGallery.style.padding = "40px";
//===================================
