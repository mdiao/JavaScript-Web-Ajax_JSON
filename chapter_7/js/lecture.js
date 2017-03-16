//Chapter 7: Animation

var compteurElt = document.getElementById("compteur");

//Decrease the counter
function reduceCounter (){
    //Conversion of the texte in number
    var counter = Number(compteurElt.textContent);
    
    if (counter > 1){
    compteurElt.textContent = counter - 1;
    } else {
        //Cancel the StopWatch
        clearInterval(intervalId);
        //Modify the title
        var titre = document.getElementById("titre");
        titre.textContent = "BOUM !!!";
        
        //Modify the title after 2 sec
        setTimeout(function(){
            titre.textContent= "Tout est casse :( ";
                   }, 2000);
    }
    
}

//Call of the reduceCounter function for every millisec
var intervalId = setInterval(reduceCounter, 1000);


var cadre =  document.getElementById("cadre");
var bloc = document.getElementById("bloc");
var blocWidth = parseFloat(getComputedStyle(bloc).width);
var animationId = null;

//Conversion in numbers of the diameter of the bloc (value of the form: XXpx)
var diameterBloc = parseFloat(getComputedStyle(bloc).width);
var speed = 2; // Speed of movement of the bloc

//Move the bloc on your left
function moveBloc() {
    //Conversion in number of the left position of the bloc
    var xBloc = parseFloat (getComputedStyle(bloc).left);
    
    
    //
    var xMax = parseFloat (getComputedStyle(cadre).width);
    
    if (xBloc + blocWidth <= xMax){
    //Move the bloc
    bloc.style.left = (xBloc + speed) + "px";
    
    //Ask the browser to call the MoveBlock asap
    animationId = requestAnimationFrame(moveBloc);
        
    } else {
        
        //Cancel the animation
        cancelAnimationFrame (animationId);
    }
}

animationId = requestAnimationFrame(moveBloc); //Begining of the animation