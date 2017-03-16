
ajaxGet("http://localhost:8888/javascript-web-srv/data/films.json", function(reponse){
    
    //Transform the char to an object
    var films = JSON.parse(reponse);
    //Display the title of each movie
    films.forEach(function (film){
        console.log(film.tire);
    })
    
});