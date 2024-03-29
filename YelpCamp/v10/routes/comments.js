var express = require("express");
var router = express.Router({mergeParams: true}); //merges params from campgrounds and comments so that inside the comment routes we can access :id that we defined
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware"); //if only a directory is required, it automatically requires the contents of the index.js file


// comments new
router.get("/new",middleware.isLoggedIn, function(req, res) {
    //find campground by id
    Campground.findById(req.params.id, function(err, campground) {
        if(err) {
            console.log(err);
        }
        else {
            res.render("comments/new", {campground: campground}); 
        }
    });
});

// comments create
router.post("/", middleware.isLoggedIn, function(req, res) {
   //lookup campground using ID
   Campground.findById(req.params.id, function(err, campground) {
       if(err) {
           console.log(err);
           res.redirect("/campgrounds");
       }
       else {
           Comment.create(req.body.comment, function(err, comment) {
               if(err) {
                   console.log(err);
               }
               else {
                   //add username and id to comment
                   comment.author.id = req.user._id;
                   comment.author.username = req.user.username;
                   //save comment
                   comment.save();
                   campground.comments.push(comment);
                   campground.save();
                   console.log(comment);
                   console.log(comment.author.username);
                   res.redirect("/campgrounds/" + campground._id);
               }
           });
        
       }
   });
   //create new comment
   //connect new comment to campground
   // redirect to campground show page
});

// COMMENT EDIT ROUTE
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res) {
    Comment.findById(req.params.comment_id, function(err, foundComment) {
        if(err) {
            res.redirect("back");
        }
        else {
            res.render("comments/edit", { campground_id: req.params.id, comment: foundComment });             
        }
    });
});

// COMMENT UPDATE 
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
   Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment) {
       if(err) {
           res.redirect("back");
       }
       else {
           res.redirect("/campgrounds/" + req.params.id); //redirect back to show page
       }
   }); 
});

// COMMENT DESTROY ROUTE
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
    Comment.findByIdAndRemove(req.params.comment_id, function(err) {
        if(err) {
            res.redirect("back");
        }
        else {
            res.redirect("/campgrounds/" + req.params.id) // back to campground show page
        }
    });
});



module.exports = router;