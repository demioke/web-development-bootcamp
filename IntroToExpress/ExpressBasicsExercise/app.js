var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!"
    };
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'.");
});

app.get("/repeat/:message/:num", function(req, res) {
    var message = req.params.message;
    var num = Number(req.params.num);
    var str = "";
    for (var i = 0; i < num; i++) {
        str += message + " ";
    }
    res.send(str);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});



//// Tell Express To Listen For Requests /////
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server has started");
}); //listen on a specified port