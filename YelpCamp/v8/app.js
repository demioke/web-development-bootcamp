var express      = require("express");
var app          = express();
var bodyParser   = require("body-parser");
var mongoose     = require("mongoose");
var Campground   = require("./models/campground"); //.j isnt required as it is implicit
var seedDB       = require("./seeds"); 
var Comment      = require("./models/comment");
var passport = require("passport");
var localStrategy = require("passport-local");
//var passportLocalMongoose = require("passport-local-mongoose");
var User = require("./models/user");

// requiring routes
var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var indexRoutes = require("./routes/index");

mongoose.connect("mongodb://localhost/yelp_camp"); //tell mongoose to connect to a DB. if cat_app DB doesnt exist, it will make one
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); //__dirname refers to the directory that the script i.e. app.js is running in. allows us to link to our custom stylesheets stored there


// seedDB(); //seed the database

////////////////////// PASSPORT CONFIGURATION //////////////////////////////
app.use(require("express-session")({
    secret: "one two three",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser())

app.use(function(req, res, next) { //middleware
    res.locals.currentUser = req.user; //whatever is in res.locals is whats available inside our template. this allows us to use currentUser in all ejs templates in our routes as it will be needed in the headerfile to display user status
    next(); // MUST PUT THIS IN. allows middleware to move on to the next code
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes); // ALL routes begin in "/campgrounds". thus the routes stated in this file are appended onto it
// make sure to include express.Router({mergeParams: true}) so that params from campgrounds and comments will be merged so that inside the comment routes we can access :id that we defined
app.use("/campgrounds/:id/comments", commentRoutes); // ALL routes begin in "/campgrounds/:id/comments". thus the routes stated in this file are appended onto it




app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server has started");
});