/**
 * @author: Debdatta Sarkar
 * Primary file for the API
 */

// console.log("Hello World!!");

// Dependencies
var http = require('http');

// The server should respond to all requests with a string
var server = http.createServer(function(req,res){
    // Get the URL and parse it

    // Get the path

    // Send the response
    res.end('Hello World\n');
});

// Start the server, and have it listen on port 3000
server.listen(3000,function(){
    console.log("The server is listening on port 3000 now");
});