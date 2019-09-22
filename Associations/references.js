var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");
var Post = require("./models/post.js"); // file is inside the models directory. note that "./" references our current directory. i.e. Associations
var User = require("./models/user.js"); // file is inside the models directory. note that "./" references our current directory. i.e. Associations




// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

Post.create({
    title: "How to coook the best burger Pt 4",
    content: "AREGSE FTYF FTYUDTDRR DRTDTRDT RTYDRDED DRYDREYDDRDU RDU DDY"
}, function(err, post) {
    if(err) {
        console.log(err);
    }
    else {
        User.findOne({email: "bob@gmail.com"}, function(err, foundUser) {
            if(err) {
                console.log(err);
            }
            else {
                foundUser.posts.push(post);
                foundUser.save(function(err, data) {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        console.log(data); //note that only post id's will appear in the posts array
                    }
                })
            }
        });
    }
});



//find user
//find all posts of that user

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) { //.populate() finds all the posts & .exec() starts the query. no need for callback fn in .find()
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(user);
//     }
// });