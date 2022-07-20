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
