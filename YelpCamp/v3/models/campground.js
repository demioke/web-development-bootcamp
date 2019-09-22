var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }    
    ]
});

module.exports = mongoose.model("Campground", campgroundSchema) //compiles campgroundSchema into a model. use "Campground" as mongoose pluralises it to "Campgrounds". allows us to use mongo fns on Campground
