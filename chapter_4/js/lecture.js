var pElt = document.querySelector("p");
pElt.style.color="red";
pElt.style.margin="50px";
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor= "black";

var paragraphElt = document.getElementsByTagName("p");
console.log(paragraphElt[0].style.color);
console.log(paragraphElt[1].style.color);
console.log(paragraphElt[2].style.color);


//How to access the information located in a CSS sheet
var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle);
console.log(stylePara.color);