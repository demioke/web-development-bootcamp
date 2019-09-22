var Campground = require("../models/campground");
var Comment = require("../models/comment");

// all the middleware goes here
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
    // is user logged in?
    if(req.isAuthenticated()) {
        Campground.findById(req.params.id, function(err, foundCampground) {
            if(err || !foundCampground) { // err or no campground found i.e foundCampground is null as incorrect id was used
                req.flash("error", "Campground not found.");
                res.redirect("back");
            }
            else {
                // does user own the campground?
                // console.log(foundCampground.author.id); //mongoose object
                // console.log(req.user._id); // string
                if(foundCampground.author.id.equals(req.user._id)) { // use .equals() fn to take care of the fact that they are not the same type of data
                    next(); //proceed to call next function
                }
                else {
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("back");
                }
            }
        });
    }
    else {
        req.flash("error", "You need to be logged in to do do that.");
        res.redirect("back"); //takes user to previous page
    }
}


middlewareObj.checkCommentOwnership = function(req, res, next) {
    // is user logged in?
    if(req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function(err, foundComment) {
            if(err || !foundComment) { // err or no campground found i.e foundCampground is null as incorrect id was used
                req.flash("error", "Comment not found.");
                res.redirect("back");
            }
            else {
                // does user own the comment?
                // console.log(foundComment.author.id); //mongoose object
                // console.log(req.user._id); // string
                if(foundComment.author.id.equals(req.user._id)) { // use .equals() fn to take care of the fact that they are not the same type of data
                    next(); //proceed to call next function
                }
                else {
                    req.flash("error", "You dont have permission to do that.");
                    res.redirect("back");
                }
            }
        });
    }
    else {
        req.flash("error", "You need to be logged in to do that.");
        res.redirect("back"); //takes user to previous page
    }
}

middlewareObj.isLoggedIn = function(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "You need to be logged in to do that.");
    res.redirect("/login");
}


module.exports = middlewareObj;