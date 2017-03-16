var titleElts = document.getElementsByTagName("h2");
console.log(titleElts[0]);
console.log(titleElts.length);

var merveilElts = document.body.getElementsByClassName("merveilles");
for (var i=0; i< merveilElts.length; i++){
    console.log(merveilElts[i]);
}

console.log(document.getElementById("nouvelles"));
console.log(document.getElementById("antiques").getElementsByClassName("existe").length);

//Display all the paragraphs
console.log(document.querySelectorAll("p").length);


// Displ/ay all the paragraphs within the identity element "contenu"
console.log(document.querySelectorAll("#contenu p").length);

// Display all the element which has the class "existe"
console.log(document.querySelectorAll(".existe").length);

console.log(document.querySelectorAll("#antiques > .existe").length);


//Getting all the HTML of the DOM
console.log(document.getElementById("contenu").innerHTML);

//Getting all the content without a html balise
console.log(document.getElementById("contenu").textContent);

//Get attribute
console.log(document.querySelector("a").getAttribute("href"));

if (document.querySelector("a").hasAttribute("target")){
    console.log ("the first link has an attribute target");
} else {
    console.log ("The first link doesn't have an attribute target");
}

