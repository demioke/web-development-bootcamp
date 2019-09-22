var express = require("express");
var app = express();

app.use(express.static("public")); // tells express to include files in the public directory i.e. app.css
app.set("view engine", "ejs"); // tells express that the extension of all the template pages we are rendering will be .ejs 
                               //=> no need to add the extension .ejs at end of filename when using res.render()
                               
app.get("/", function(req, res) {
    res.render("home"); // renders html. make sure to npm install ejs
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing}); // passing 'thing' variable into ejs as 'thingVar'
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My Adorable Pet Bunny", author: "Charlie"},
        {title: "Can You Believe this Pomsky", author: "Colt"}
        ];
        
        res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is listening!!");
});