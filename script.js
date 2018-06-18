var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var css = document.querySelector("h3");
var body = document.querySelector('body')
var random = document.querySelector('#random');


function getRandomHexColor() {
  return "#" + Math.random().toString(16).slice(2,8);
}

function setRandomColors() {
  color1.value = getRandomHexColor();
  color2.value = getRandomHexColor();
  setGradient();
}

function setGradient() {
  body.style.background = "linear-gradient(to right, "
  + color1.value
  + ", "
  + color2.value
  + ")";
  css.innerText = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", setRandomColors);

setGradient();
css.innerText = body.style.background + ";";
