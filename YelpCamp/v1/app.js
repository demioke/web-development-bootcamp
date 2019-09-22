var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image:"https://farm9.staticflickr.com/8041/7930201874_6c17ed670a.jpg"},
        {name: "Granite Hill", image:"https://farm8.staticflickr.com/7205/7121863467_eb0aa64193.jpg"},
        {name: "Mountain Goat's Rest", image:"https://pixabay.com/get/e83db50929f0033ed1584d05fb1d4e97e07ee3d21cac104497f9c67eafe4b1be_340.jpg"}
];

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
    //get data from form and add to campgrounds array
    var name = req.body.name;  //body-parser allows us to obtain the body req as an object. ".name" is the name attr in form on new.ejs
    var image = req.body.image;
    var newCampground = {name: name, image: image}; //creating new campground object
    campgrounds.push(newCampground); //adding new campground to campgrounds array
    //redirect back to campgrounds page
    res.redirect("/campgrounds"); //redirects as get request
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs"); //form for adding new campgrounds
});




app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server has started");
});