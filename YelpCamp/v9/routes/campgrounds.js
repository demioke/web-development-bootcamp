var express = require("express");
var router = express.Router(); 
var Campground = require("../models/campground");

// INDEX - show all campgrounds
router.get("/", function(req, res) {
    // get all campgrounds from DB 
    Campground.find({}, function(err, allCampgrounds) { // the "{}" implies all the objects in Campground DB
        if(err) {
            console.log(err);
        }
        else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user}); // pass the allCampgrounds object to the ejs aswell as info on the user if logged in
        }
    });
});

// CREATE - add new campground to DB
router.post("/", isLoggedIn, function(req, res) {
    //get data from form and add to campgrounds array
    var name = req.body.name;  //body-parser allows us to obtain the body req as an object. ".name" is the name attr in form on new.ejs
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name: name, image: image, description: desc, author: author}; //creating new campground object
    //create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        }
        else {
            //redirect back to campgrounds page
            console.log(newlyCreated);
            res.redirect("/campgrounds"); //redirects as get request
        }
    });
});

// NEW - show form to create new campground
router.get("/new", isLoggedIn, function(req, res) {
    res.render("campgrounds/new"); //form for adding new campgrounds
});

// SHOW - shows more info about one campground 
router.get("/:id", function(req, res) {
    //find campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) { // mongoose fn to find id of data in DB
        if(err) {
            console.log(err);
        }
        else {
                console.log(foundCampground);
                //render show template with that campground
                res.render("campgrounds/show", {campground: foundCampground}); // pass the foundCampground into the ejs
        }
    }); 
});

// middleware 
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;