const _ = require('lodash');

const array = [1,2,3,4,56,7,8]

console.log('answer',_.without(array, 56));

const css = document.querySelector("h3");
const color = document.querySelector(".color");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("background");

function colorset(){
    body.style.background = "Linear-Gradient(to right, " + color.value +
     "," + color1.value  + "," + color2.value +")"

     css.textContent = body.style.background + ";";
}

color.addEventListener("input", colorset)

color1.addEventListener("input", colorset)

color2.addEventListener("input", colorset)
