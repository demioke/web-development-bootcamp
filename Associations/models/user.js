var mongoose = require("mongoose");

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [  // referencing data inside the schema. must define postSchema before userSchema
        {
            type: mongoose.Schema.Types.ObjectId, //mongoose object id
            ref: "Post"                           //that belongs to a post
        }
    ]  
});
module.exports = mongoose.model("User", userSchema);