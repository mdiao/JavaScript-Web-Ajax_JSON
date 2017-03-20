// Create an object FormData
/*var identite = new FormData();

// Adding some information in the object
identite.append("login", "Bob");
identite.append("password", "azerty");

//Create and configure the HTTP request Post toward the post_form.php file
var req= new XMLHttpRequest;
req.open("POST", "http://localhost:8888/javascript-web-srv/post_form.php");
req.send(identite);


var form = document.querySelector("form");
// Gestion de la soumission du formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Récupération des champs du formulaire dans l'objet FormData
    var data = new FormData(form);
    // Envoi des données du formulaire au serveur
    // La fonction callback est ici vide
    ajaxPost("http://localhost:8888/javascript-web-srv/post_form.php", data, function () {});
});


var commande = new FormData();
commande.append("couleur", "rouge");
commande.append("pointure", "43");

ajaxPost("http://localhost:8888/javascript-web-srv/post_form.php", commande, 
         function(response){
    
         //Display a message of success
         console.log("Commande succssfuly sent to the Server");
    
});

*/
// Creation of an object
var film = {
    titre: "Zootopie",
    annee: "2016",
    realisateur: "Byron Howard et Rich Moore"
};

ajaxPost ("http://localhost:8888/javascript-web-srv/post_form.php", film, 
          function (response){
            console.log ("Le film " + JSON.stringify(film) + " a ete envoye au serveur");
          }, true
          
);