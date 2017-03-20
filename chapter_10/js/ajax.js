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

//Execution of the AJAX POST
//This function takes the URL target, the data to send and the callback function as inputs

function ajaxPost(url, data, callback, isJson){
    var req = new XMLHttpRequest();
    req.open ("POST", url);
    req.addEventListener("load", function()
    {
        if (req.status >= 200 && req.status < 400){
            //Call the callback function with the result
            callback(req.responseText);
        } else {
            console.error (req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function(){
        console.error("Network Error with the URL " + url);
    });
    if (isJson) {
        // Define the content of the request as a JSON
        req.setRequestHeader("Content-Type", "application/json");
        //Transform the data from JSON to a string (text)
        data = JSON.stringify (data);
    }
    req.send(data);
    
}