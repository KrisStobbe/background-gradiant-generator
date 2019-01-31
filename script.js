//Initiallizing Connection to HTML Tags
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//Adding Button Initialization
var button = document.querySelector(".button");

//Testing the Variables to the Log
console.log(color1);
console.log(color2);
console.log(css);
console.log(body);
console.log(button);

//Creating Set Gradient Function:
function setGradient(){
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+ ", "
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

//Detecting when the Input of the Inputs Change
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//Adding Ability to Get Random Integers up to 255 (Will Need 6)
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Adding function that changes Linear Gradient on Click
function randomGradient(){
	// var1 = getRandomInt(255);var2 = getRandomInt(255);
	// var3 = getRandomInt(255);var4 = getRandomInt(255);
	// var5 = getRandomInt(255);var6 = getRandomInt(255);
	body.style.background = "linear-gradient(to right, rgb("
	+ getRandomInt(255) +"," + getRandomInt(255) +"," + getRandomInt(255)
	+ "), rgb(" + getRandomInt(255) +"," + getRandomInt(255) +"," + getRandomInt(255)
	+ "))";
	css.textContent = body.style.background + ";";

	// document.getElementById("color1").setAttribute('value',="#3e22f7");
}
