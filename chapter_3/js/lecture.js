/*///How to modify an existing element
document.getElementById("languages").innerHTML += '<li id="c"> C </li>';

//check if it was added.
console.log(document.getElementById("languages"));

//How to clean up an element
//document.getElementById("languages").innerHTML = "";

//Modify the text
document.querySelector("h1").textContent += " de programmation";

//How to set attribute and initialize them
document.querySelector("h1").setAttribute("id", "title");

    // or you can write it this way
    // document.querySelector("h1").id = "title";
*/
// How to add or remove a class
var titleElt = document.querySelector("h1");
titleElt.classList.remove("debut");
titleElt.classList.add("title");
console.log(titleElt);

// How to add or remove an element
var pythonElt = document.createElement("li"); // Creation of the li element
pythonElt.id = "python";  //Definion of the identifier
pythonElt.textContent = "Python"; //Definition of the text
document.getElementById("languages").appendChild(pythonElt); // Insert the element

//Insert a node before another node
var perlElts = document.createElement("li");
perlElts.id = "perl";
perlElts.textContent = "Perl";
document.getElementById("languages").insertBefore(perlElts, document.getElementById("php"));

//choice of a specific insertion
document.getElementById("languages").insertAdjacentHTML("afterBegin", '<li id = "Javascript"> JavaScript</>');

// How to replace or delete element
var bashElt = document.createElement("li");
bashElt.id = "bash";
bashElt.textContent = "Bash";

document.getElementById("languages").replaceChild(bashElt, document.getElementById("perl"));

//How to delete an element
document.getElementById("languages").removeChild(document.getElementById("cpp"));
