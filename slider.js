// ------------------slider auto

const sliderimg = document.getElementsByClassName("slider-cont")[0];
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const arrimg = [
  `<div class="carousel-itemss" style="background-image:url('./slider-img/backgr9.jpg')"></div>`,
  `<div class="carousel-itemss" style="background-image:url('./slider-img/comfort1.jpg')"></div>`,
  `<div class="carousel-itemss" style="background-image:url('./slider-img/backgr6.jpg')"></div>`,
  `<div class="carousel-itemss" style="background-image:url('./slider-img/fitar1.jpg')"></div>`,
  `<div class="carousel-itemss" style="background-image:url('./slider-img/fiterman1.jpg')"></div>`,
];

let x = 0;
sliderimg.innerHTML += arrimg[x];
prev.setAttribute("disabled", "");
sliderimg.innerHTML += `<p>fotos ${x + 1} of ${arrimg.length} </p>`;

next.addEventListener("click", (eo) => {
  prev.removeAttribute("disabled");
  x++;
  sliderimg.innerHTML = arrimg[x];
  sliderimg.innerHTML += `<p>fotos ${x + 1} of ${arrimg.length} </p>`;

  allnumSlider
    .getElementsByClassName("activeNume")[0]
    .classList.remove("activeNume");
  allnumSlider.getElementsByTagName("button")[x].classList.add("activeNume");

  if (x + 1 == arrimg.length) {
    next.setAttribute("disabled", "");
  }
});

prev.addEventListener("click", (eo) => {
  next.removeAttribute("disabled");
  x--;
  sliderimg.innerHTML = arrimg[x];
  sliderimg.innerHTML += `<p>fotos ${x + 1} of ${arrimg.length} </p>`;

  if (x == 0) {
    prev.setAttribute("disabled", "");
  }

  allnumSlider
    .getElementsByClassName("activeNume")[0]
    .classList.remove("activeNume");
  allnumSlider.getElementsByTagName("button")[x].classList.add("activeNume");
});

const numSlider = document.querySelectorAll(".numSlider");
const allnumSlider = document.getElementsByClassName("allnumSlider")[0];

setInterval(() => {
  sliderimg.innerHTML = arrimg[x];
  allnumSlider
    .getElementsByClassName("activeNume")[0]
    .classList.remove("activeNume");
  allnumSlider.getElementsByTagName("button")[x].classList.add("activeNume");

  x++;

  if (x == arrimg.length) {
    x = 0;
  }
}, 2000);

numSlider.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    allnumSlider
      .getElementsByClassName("activeNume")[0]
      .classList.remove("activeNume");
    eo.target.classList.add("activeNume");

    sliderimg.innerHTML = arrimg[index];
    sliderimg.innerHTML += `<p>fotos ${index + 1} of ${arrimg.length} </p>`;
    x = index;

    if (index == arrimg.length - 1) {
      next.setAttribute("disabled", "");
      prev.removeAttribute("disabled", "");
    } else if (index == 0) {
      prev.setAttribute("disabled", "");
      next.removeAttribute("disabled", "");
    } else {
      next.removeAttribute("disabled", "");
      prev.removeAttribute("disabled", "");
    }
  });
});
