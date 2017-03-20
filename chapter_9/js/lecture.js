var articlesElt = document.getElementById("articles");
ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function (response){
        //Cast the reply to a table of articles
        var articles = JSON.parse(response);
        articles.forEach(function(article){
        
        //Adding the title and the content of each article
        var titreElt = document.createElement("h2");
        titreElt.textContent = article.titre;
        var contenuElt = document.createElement("p");
        contenuElt.textContent = article.contenu;
        articlesElt.appendChild(titreElt);
        articlesElt.appendChild(contenuElt);
                         });
});


//Accessing to an API via an access key
var premMinElt = document.getElementById("premMin");
ajaxGet("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", function (response)
{
        
        var premierMinistre = JSON.parse(response);
        //Adding the description and logo into the page
        var descriptionElt = document.createElement("p");
        descriptionElt.textContent = premierMinistre.description;
        var logoElt = document.createElement("img");
        logoElt.src = premierMinistre.logo;
        premMinElt.appendChild(descriptionElt);
        premMinElt.appendChild(logoElt);
});

ajaxGet("http://api.wunderground.com/api/50a65432f17cf542/conditions/q/France/Lyon.json", function (response)
{
    
        var meteo = JSON.parse(response);
        //Pulling some results
        var temperature = meteo.current_observation.temp_c;
        var humidite = meteo.current_observation.relative_humidity;
        var imageUrl = meteo.current_observation.icon_url;
    
        //Display the results
        var meteoElt = document.getElementById("meteo");
        var conditionsElt = document.createElement("div");
        conditionsElt.textContent = "Il fait actuellement " + temperature + 
                                    " degree et l humidite est de " + humidite;
        var imageElt = document.createElement("img");
        imageElt.src = imageUrl;
        
        meteoElt.appendChild(conditionsElt);
        meteoElt.appendChild(imageElt);
});