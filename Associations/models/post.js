var mongoose = require("mongoose"); //must still require relevent dependencies when modularising code

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
module.exports = mongoose.model("Post", postSchema); // this is what we want to export out of the file