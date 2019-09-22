var express = require("express");
var app = express();
var bodyParser = require("body-parser"); // this package is required to obtain info from requests created using forms

app.use(bodyParser.urlencoded({extended: true})); // allows us to use body parser

app.set("view engine", "ejs"); // all templates are .ejs

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lilly"];

app.get("/", function(req, res) {
    res.render("home");
});

////////// Post Request //////////
app.post("/addfriend", function(req, res) { // only triggered by a post to this url
    var newFriend = req.body.newfriend; // req.body contains all the data associated with the request body
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started");
});