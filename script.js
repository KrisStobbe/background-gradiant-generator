//Initiallizing Connection to HTML Tags
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//Testing the Variables to the Log
console.log(color1);
console.log(color2);
console.log(css);
console.log(body);

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

