//Initiallizing Connection to HTML Tags
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//Adding Button Initialization
var button = document.querySelector(".button");

//Adding Buttons Value Initialization to Update them
var current1 = document.getElementById("current1");
var current2 = document.getElementById("current2");

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
	 var1 = getRandomInt(255);
	 var2 = getRandomInt(255);
	 var3 = getRandomInt(255);
	 var4 = getRandomInt(255);
	 var5 = getRandomInt(255);
	 var6 = getRandomInt(255);

	body.style.background = "linear-gradient(to right, rgb("
	+ var1 +"," + var2 +"," + var3
	+ "), rgb(" + var4 +"," + var5 +"," + var6
	+ "))";
	css.textContent = body.style.background + ";";
	
	//RGB to Hex Converter
	current1.value="#" + ((1 << 24) + (var1 << 16) + (var2 << 8) + var3).toString(16).slice(1);
	current2.value="#" + ((1 << 24) + (var4 << 16) + (var5 << 8) + var6).toString(16).slice(1);
}
