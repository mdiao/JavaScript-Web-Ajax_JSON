var h = document.head; //The variable h contains the head object of the DOM
console.log(h);

var b = document.body;  // The variable b contains the body object of the DOM
console.log(b);

if (document.body.nodeType === document.Element_Node){
    console.log ("Body is an element node");
} else {
    console.log("Body is a text node");
}

console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);

//Display the child node
for (var i=0; i<document.body.childNodes.length; i++){
    console.log(document.body.childNodes[i]);
}


var h1 = document.body.childNodes[1];
console.log(h1.parentNode);

console.log(document.parentNode);