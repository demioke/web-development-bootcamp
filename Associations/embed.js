var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);


//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]  // embeding data inside the schema. must define postSchema before userSchema
});
var User = mongoose.model("User", userSchema);




// var newUser = new User({
//     email: "hermione@hogwarts.edu",
//     name: "Hermione Granger"
// });
// newUser.posts.push({ //adding a new post to the user
//     title: "How to brew polyjuice potion",
//     content: "Just kidding. go to potions class to learn"
// });
// newUser.save(function(err, user) {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(user);
//     }
// });


// var newPost = new Post({
//     title: "Reflections on apples",
//     content: "They are tasty"
// });
// newPost.save(function(err, post) {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(post);
//     }
// });


User.findOne({name: "Hermione Granger"}, function(err, user) { //finds ONE user
    if(err) {
        // console.log(err);
    }
    else {
        user.posts.push({ //add a new post
            title: "3 things i really hate",
            content: "Voldemort. Voldemort. Voldemort"
        });
        user.save(function(err, user) {
            if(err) {
                console.log(err);
            }
            else {
                console.log(user);
            }
        });
    }
});