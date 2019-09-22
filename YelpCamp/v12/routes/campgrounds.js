var express = require("express");
var router = express.Router(); 
var Campground = require("../models/campground");
var middleware = require("../middleware"); //if only a directory is required, it automatically requires the contents of the index.js file

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
router.post("/", middleware.isLoggedIn, function(req, res) {
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
router.get("/new", middleware.isLoggedIn, function(req, res) {
    res.render("campgrounds/new"); //form for adding new campgrounds
});

// SHOW - shows more info about one campground 
router.get("/:id", function(req, res) {
    //find campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) { // mongoose fn to find id of data in DB
        if(err || !foundCampground) { // err or no campground found i.e foundCampground is null as incorrect id was used
            req.flash("error", "Campground not found");
            res.redirect("back");
        }
        else {
                console.log(foundCampground);
                //render show template with that campground
                res.render("campgrounds/show", {campground: foundCampground}); // pass the foundCampground into the ejs
        }
    }); 
});

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) { //shouldnt be an error as it would have been checked in the checkCampgroundOwnership fn
       res.render("campgrounds/edit", {campground: foundCampground});
    });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res) {
   // find and update correct campground
   Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
       if(err) {
           res.redirect("/campgrounds");
       }
       else {
           res.redirect("/campgrounds/" + req.params.id);
       }
   });
   // redirect somewhere(show page)
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res) {
   Campground.findByIdAndRemove(req.params.id, function(err) {
       if(err) {
           res.redirect("/campgrounds");
       }
       else {
           res.redirect("/campgrounds");
       }
   });
});





module.exports = router;