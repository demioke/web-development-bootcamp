var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
});

app.get("/results", function(req, res) {
    var query = req.query.search; // search is the value of name attr in form on search.ejs
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb"; // format of api url
    
    request(url, function(error, response, body) {
        if(!error && response.statusCode === 200) {
            var data = JSON.parse(body); //parses the body to convert it from a string to an object
            res.render("results", {data: data});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Movie App has started");
});