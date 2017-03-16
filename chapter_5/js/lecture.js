// How to create an event listner

function clic(){
    console.log("Clic");
}

var boutonElt = document.getElementById("bouton");

//boutonElt.addEventListener("click", clic);



//How to delete an event listener
boutonElt.removeEventListener("click", clic);

// How to display the type and the target
boutonElt.addEventListener("click", function (e) {
   console.log("Event: " + e.type + " , text of the target: " + e.target.textContent);
});

//Keyboard touch sensor (How to know the key pressed on the keyboard) for printable characters
document.addEventListener("keypress", function (e){ 
    console.log("You just pressed the following key: " + String.fromCharCode(e.charCode));
});

function keyboardInfo(e){
    console.log("Keyboard Event: " + e.type +" , Key : " + e.keycode);
}
console.log(addEventListener("keydown", keyboardInfo));
console.log(addEventListener("keyup", keyboardInfo));

//This function determines which button on the mouse was clicked
function getMouseButton(code){
    var button = "unknown";
    switch (code){
        case 0:
            button = "Left";
            break
        case 1:
            button = "Center";
            break;
        case 2:
            button = "Right";
            break;
    }
    return button;
}

//Display the information about the side of the mouse pressed
function mouseInfo(e){
    console.log("The pressed button is: " + e.type + " button " + getMouseButton(e.button) + ", X" + e.clientX + ", Y" + e.clientY);
}

document.addEventListener("click", mouseInfo);


//Display the non printable character for the mouse
document.addEventListener("mousedown", mouseInfo);
document.addEventListener("mouseup", mouseInfo);

//How to create an event listenner for the loading of a page
window.addEventListener("load", function (){
    console.log("Web page fully loaded");
});

//How to close a web page
window.addEventListener("beforeunload", function(e){
    var message = "On est bien ici";
    e.returnValue = message; //Request a regular confirmation
    return message;
    
});

//This handles the clicks on the document
document.addEventListener("click", function(){
    console.log("document Manager");
});

//This handles the clicks on the paragraphs
document.getElementById("para").addEventListener("click", function(){
    console.log("paragraph Manager");
});

//This handles the clicks on the buton
document.getElementById("propa").addEventListener("click", function(e){
    console.log("button Manager");
    e.stopPropagation();
});

//How to Prevent the default events
document.getElementById("interdit").addEventListener("click", function(e){
    console.log("Keep on reading instead ;)");
    e.preventDefault();
});