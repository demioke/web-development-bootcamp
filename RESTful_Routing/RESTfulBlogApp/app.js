var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");
var expressSanitizer = require("express-sanitizer");

// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public")); // allows us to serve custo stylesheets saved in this directory
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer()); //has to come after body-parser. allows us to prevent users from entering script tags int htmls
app.use(methodOverride("_method")); // looks for _method in urls to enable html to make PUT and DELETE requests


// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now} //the date the object i.e. the blog was created. default variable can be used in other obj variabls as used here
});
var Blog = mongoose.model("Blog", blogSchema);

// RESTFUL ROUTES

app.get("/", function(req, res) {
    res.redirect("/blogs");
});

// INDEX ROUTE
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) { // find all blogs in DB: "blogs"
        if(err) {
            console.log("ERROR");
        }
        else {
            res.render("index", {blogs: blogs}); // pass all blogs to ejs as "blogs"
        }
    });
});

// NEW ROUTE
app.get("/blogs/new", function(req, res) {
   res.render("new"); 
});

// CREATE ROUTE
app.post("/blogs", function(req, res) {
    // create blog
    console.log(req.body.blog.body);
    req.body.blog.body = req.sanitize(req.body.blog.body); //sanitizes body of blog
    console.log("=====================");
    console.log(req.body.blog.body);
    Blog.create(req.body.blog, function(err, newBlog) {
        if(err) {
            res.render("new");
        }
        else { // redirect to the index
            res.redirect("/blogs");
        }
    });
});

// SHOW ROUTE
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if(err) {
            res.redirect("/blogs");
        }
        else {
            res.render("show", {blog: foundBlog});
        }
    });
});

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if(err) {
            res.redirect("/blogs");
        }
        else {
            res.render("edit", {blog: foundBlog});
        }
    });
});

// UPDATE ROUTE 
app.put("/blogs/:id", function(req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body); //sanitizes body of blog
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) { // 2nd parameter of fn is the new updated data
        if(err) {
            res.redirect("/blogs");
        }
        else {
            res.redirect("/blogs/" + req.params.id) // redirects back to show page with updated blog
        }
    });
});

// DELETE ROUTE
app.delete("/blogs/:id", function(req, res) {
    //destroy blog
    Blog.findByIdAndRemove(req.params.id, function(err) { // callback fn only takes err argument as blog data may be deleted
        if(err) {
            res.redirect("/blogs");
        }
        else {
            res.redirect("/blogs");
        }
    });
    //redirect somewhere
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("SERVER IS RUNNING");
});