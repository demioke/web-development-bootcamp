var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
var localStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var User = require("./models/user");

mongoose.connect("mongodb://localhost/auth_demo_app");

var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({ //requiring and using express-session all in one line
    secret: "one two three", //used to encode and decode the sessions
    resave: false, //required to work
    saveUninitialized: false //required to work
})); 
app.use(passport.initialize()); //initialises passport
app.use(passport.session()); //sets up passport

passport.use(new localStrategy(User.authenticate()));
// these two methods are responsible for reading the session i.e. taking encoded data from session and unencoding it and vice versa.
passport.serializeUser(User.serializeUser()); // encodes session
passport.deserializeUser(User.deserializeUser()); // decodes session



////////////////////////////// ROUTES ///////////////////////////////////////////

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res) {
    res.render("secret");
});

//////// AUTH ROUTES /////////

//show signup form
app.get("/register", function(req, res) {
    res.render("register");
});

//handeling user signup
app.post("/register", function(req, res) {
   req.body.username
   req.body.password
   User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
       if(err) {
           console.log(err);
           res.render("register");
       }
       else {
           passport.authenticate("local")(req, res, function() { // logs the user in and takes care of everything in the session
               res.redirect("/secret");
           });
       }
   });
});

/////// LOGIN ROUTES /////////

//render login form
app.get("/login", function(req, res) {
    res.render("login");
});

// login logic
// middleware
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res) {
});



app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});



function isLoggedIn(req, res, next) { // next is the next fn that needs to be called. Express knows this.
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("SERVER STARTED");
});