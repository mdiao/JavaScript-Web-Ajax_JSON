//This function handles the client/server errors
function ajaxGet(url, callback){

//Creation of a HTTP query
var req =  new XMLHttpRequest();

//HTTP Query GET Synchroned with the langages.txt local file

req.open("GET", url);


//Event listener for load
req.addEventListener("load", function (){
    
if (req.status >= 200 && req.status < 400){
    //Display the reply of the Query
    callback(req.responseText);
} else {
    //Display the information about the failure
    console.error(req.status + " " + req.statusText + " " + url);
}

});
req.addEventListener("error", function(){
    //The query didn't reach the server
    console.error("Network Error with the URL " + url);
})
//Send the Query
req.send(null);

}

/*function display (response){
    console.log (response);
}*/