var express = require("express");
var app = express(); // express is a bigger framework


/////////////////// Routes///////////////////
// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("hi there");
});

// "/bye" => "goodbye!"
app.get("/bye", function(req, res) {
    res.send("goodbye");
});

// "/dog" => "meow"
app.get("/dog", function(req, res) {
   res.send("meow"); 
});

// Route Parameters
app.get("/r/:subredditName", function(req, res) { // subreddit parameter. go to route that matches this pattern
   var subreddit = req.params.subredditName;     // accesses the specific param using the req argument
   res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT");  // eg /r/puppies for puppies subreddit
});                                             

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) { // multiple parameters in same route
   res.send("welcome to the comments page");             
});                                             


app.get("*", function(req, res) { // for any url not defined in server. must come AFTER defined routes
    res.send("you are a star");
});

//// Tell Express To Listen For Requests /////
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server has started");
}); //listen on a specified port