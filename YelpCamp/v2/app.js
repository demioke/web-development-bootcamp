var express      = require("express");
var app          = express();
var bodyParser   = require("body-parser");
var mongoose     = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp"); //tell mongoose to connect to a DB. if cat_app DB doesnt exist, it will make one
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema) //compiles campgroundSchema into a model. use "Campground" as mongoose pluralises it to "Campgrounds". allows us to use mongo fns on Campground

// Campground.create(
//     {
//         name: "Granite Hill", 
//         image:"https://farm8.staticflickr.com/7205/7121863467_eb0aa64193.jpg",
//         description: "This is a huge Granite hill. No bathrooms. No water. Beautiful granite"
//     }, function(err, campground) {
//         if(err) {
//             console.log(err);
//         }
//         else {
//             console.log("NEWLY CREATED CAMPGROUND: ");
//             console.log(campground);
//         }
//     });

var campgrounds = [
        {name: "Salmon Creek", image:"https://farm9.staticflickr.com/8041/7930201874_6c17ed670a.jpg"},
        {name: "Granite Hill", image:"https://farm8.staticflickr.com/7205/7121863467_eb0aa64193.jpg"},
        {name: "Mountain Goat's Rest", image:"https://pixabay.com/get/e83db50929f0033ed1584d05fb1d4e97e07ee3d21cac104497f9c67eafe4b1be_340.jpg"}
];

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
            res.render("index", {campgrounds: allCampgrounds}); // pass the allCampgrounds object to the ejs
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
    res.render("new.ejs"); //form for adding new campgrounds
});

// SHOW - shows more info about one campground 
app.get("/campgrounds/:id", function(req, res) {
    //find campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground) { // mongoose fn to find id of data in DB
        if(err) {
            console.log(err);
        }
        else {
                //render show template with that campground
                res.render("show", {campground: foundCampground}); // pass the foundCampground into the ejs
        }
    }); 
});




app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server has started");
});