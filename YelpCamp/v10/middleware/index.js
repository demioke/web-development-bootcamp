var Campground = require("../models/campground");
var Comment = require("../models/comment");

// all the middleware goes here
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
    // is user logged in?
    if(req.isAuthenticated()) {
        Campground.findById(req.params.id, function(err, foundCampground) {
            if(err) {
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
                    res.redirect("back");
                }
            }
        });
    }
    else {
        res.redirect("back"); //takes user to previous page
    }
}


middlewareObj.checkCommentOwnership = function(req, res, next) {
    // is user logged in?
    if(req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function(err, foundComment) {
            if(err) {
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
                    res.redirect("back");
                }
            }
        });
    }
    else {
        res.redirect("back"); //takes user to previous page
    }
}

middlewareObj.isLoggedIn = function(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}


module.exports = middlewareObj;