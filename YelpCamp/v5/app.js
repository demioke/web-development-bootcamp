var express      = require("express");
var app          = express();
var bodyParser   = require("body-parser");
var mongoose     = require("mongoose");
var Campground   = require("./models/campground"); //.j isnt required as it is implicit
var seedDB       = require("./seeds"); 
var Comment      = require("./models/comment");

mongoose.connect("mongodb://localhost/yelp_camp"); //tell mongoose to connect to a DB. if cat_app DB doesnt exist, it will make one
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); //__dirname refers to the directory that the script i.e. app.js is running in. allows us to link to our custom stylesheets stored there
seedDB();


app.get("/", function(req, res) {
    res.render("landing");
});

// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res) {
    // get all campgrounds from DB 
    Campground.find({}, function(err, allCampgrounds) { // the "{}" implies all the objects in Campground DB
        if(err) {
            console.log(err);
        }
        else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds}); // pass the allCampgrounds object to the ejs
        }
    });
});

// CREATE - add new campground to DB
app.post("/campgrounds", function(req, res) {
    //get data from form and add to campgrounds array
    var name = req.body.name;  //body-parser allows us to obtain the body req as an object. ".name" is the name attr in form on new.ejs
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc}; //creating new campground object
    //create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        }
        else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds"); //redirects as get request
        }
    });
});

// NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res) {
    res.render("campgrounds/new"); //form for adding new campgrounds
});

// SHOW - shows more info about one campground 
app.get("/campgrounds/:id", function(req, res) {
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


//======================================================================================================================================
// COMMENTS ROUTES
//======================================================================================================================================

app.get("/campgrounds/:id/comments/new", function(req, res) {
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

app.post("/campgrounds/:id/comments", function(req, res) {
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
                   campground.comments.push(comment);
                   campground.save();
                   res.redirect("/campgrounds/" + campground._id);
               }
           });
        
       }
   });
   //create new comment
   //connect new comment to campground
   // redirect to campground show page
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server has started");
});