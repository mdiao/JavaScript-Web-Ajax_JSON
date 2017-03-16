//How to enter the value for a text 
var pseudoElt= document.getElementById("pseudo");
pseudoElt.value = "MonPseudo";

//How to use focus and blur
pseudoElt.addEventListener("focus", function () {
    document.getElementById("aidePseudo").textContent = "Entrez un Pseudo";
});

pseudoElt.addEventListener("blur", function(e){
    document.getElementById("aidePseudo").textContent= "";
});

pseudoElt.focus();

//Display a confirmation of the subscription for a checkbox
document.getElementById("confirmation").addEventListener("change", function (e){
    console.log("Ask for a confirmation :" + e.target.checked);
});

//Display the type of subscription that was selected for a radio
var aboElts = document.getElementsByName("abonnement");

for (var i=0; i< aboElts.length; i++){
    aboElts[i].addEventListener("change", function (e){
        console.log("The type of subscription is: " + e.target.value);
    });
}

//Display the select country into the drop-down menu

document.getElementById("nationalite").addEventListener("change", function(e){
    console.log("The selected country is: " + e.target.value);
});

var form = document.querySelector("form");
console.log("Number of element: " + form.elements.length);
console.log(form.elements[0].name);
console.log(form.elements.mdp.type);


    //Validation of the password while inserting it
document.getElementById("mdp").addEventListener("input", function(e){
    var mdp = e.target.value;  //Value entered in the field
    var mdpLength = "short";
    var msgColor = "red";      //Short Length --> red color
    if (mdp.length >= 8){
        mdpLength = "sufficient";
        msgColor = "green";
    } else if (mdp.length >= 4) {
        mdpLength = "average";
        msgColor = "orange";
    }
    var helpMdpElt = document.getElementById("aideMdp");
    helpMdpElt.textContent = "Length : " + mdpLength;  //Help Message
    helpMdpElt.style.color = msgColor;  //Color of the help message
});
    //Validation of the password after inserting it
/*
document.getElementById("courriel").addEventListener("blur", function (e) {
    var validateCouriel = "";
    var emailColor = "green";
    if (e.target.value.indexOf("@") === -1){
        // The email enterted is imcomplete 
        validateCouriel = "Invalid email address";
        emailColor = "red";
    }
    var helpEmail = document.getElementById("aideCourriel");
    helpEmail.textContent = validateCouriel;
    helpEmail.style.color = emailColor;
});
*/
document.getElementById("courriel").addEventListener("blur", function (e) {
    var validateCouriel = "";
    var emailColor = "green";
    var regexCourriel = /.+@.+\..+/;
    if (!regexCourriel.test(e.target.value)){
        validateCouriel = "Invalid email address";
        emailColor = "red";
    }
    var helpEmail = document.getElementById("aideCourriel");
    helpEmail.textContent = validateCouriel;
    helpEmail.style.color = emailColor;
});
//Display all the data entered

form.addEventListener("submit", function(e){
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var courriel = form.elements.courriel.value;
    console.log("You choose the login: " + pseudo + ", the password " + mdp + "and the email " + courriel);
    
    if (form.elements.confirmation.checked){
        console.log("You asked for a confirmation email");
    } else{
        console.log("You haven't asked for a confirmation email");
    }
    
    switch (form.elements.abonnement.value){
        case "abonewspromo":
            console.log ("You have suscribed for the Newsletter and Promotion");
            break;
        case "abonews":
            console.log ("You have subscribed for the Newsletter");
            break;
        case "aborien":
            console.log ("You haven't subscribed");
            break;
        default:
            console.log("Error: Unknown subscription code");
    }
    
    switch (form.nationalite.value){
        case "FR":
            console.log ("You are French");
            break;
        case "BE":
            console.log("You are Belgian");
            break;
        case "SUI":
            console.log("You are Swedish");
            break;
        default:
            console.log ("Error: Unknown Nationalite");
    }
    e.preventDefault(); //It cancels the submission.
});