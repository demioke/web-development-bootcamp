// Mongoose is an ODM- Object Data Mapper. this allows us to write JS inside of our JS files i.e. express files 

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");//tell mongoose to connect to a DB. if cat_app DB doesnt exist, it will make one

//Cat Schema
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema); //compiles catSchema into a model. use "Cat" as mongoose pluralises it to "Cats". allows us to use mongo fns on Cat

// var george = new Cat({ //creating a cat called George
//     name: "Mrs Norris",
//     age: 7,
//     temperament: "Evil"
// });

//adding a new cat to the DB
// george.save(function(err, cat) { // saves cat "george" to DB. use callback fn to check if it was sucessful
//     if(err) {
//         console.log("SOMETHING WENT WRONG");
//     }
//     else {
//         console.log("CAT WAS SAVED TO DB");
//         console.log(cat); // the saved cat object FROM DB
//     }
// }); 
// or create and save a cat this way
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat) {
    if(err) {
        console.log(err);
    }
    else {
        console.log(cat);
    }
});


//retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats) {
    if(err) {
        console.log("SOMETHING WENT WRONG");
    }
    else {
        console.log("All the Cats");
        console.log(cats); // the saved cat object FROM DB
    }
});